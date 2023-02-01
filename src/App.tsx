import { useRef, useState } from "react";
import "./App.css";
import SidePanel from "./components/SidePanel";
import NavBar from "./components/NavBar";
import ItemSearchHeader from "./components/ItemSearchHeader";
import FetchData from "./components/FetchData";
import FilterPanel, { QueryObjectState } from "./components/FilterPanel";
import DataTable from "./components/DataTable";
import { Container } from "./components/commons/Container";
import tableData from "./mockData/MOCK_DATA.json";

export interface ApiData {
  id: number;
  order_number: number;
  type: string;
  item: number;
  category: string;
  description: string;
}

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const App = () => {
  const apiDataRef = useRef<ApiData[]>([]);

  const [showFilterPanelState, setShowFilterPanelState] = useState(false);
  const [apiDataState, setApiDataState] = useState<ApiData[]>([]);
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const duration = [300, 500, 1000, 2000, 3000];

  const handleFetchData = async (method: string = "set") => {
    setLoadingState(true);
    const response: ApiData[] = await new Promise((res, rej) => {
      setTimeout(() => {
        res(tableData);
      }, duration[getRandomNumber(0, 3)]);
    });
    apiDataRef.current = response;
    if (method === "get") return response;
    setApiDataState(response);
    setLoadingState(false);
    return response;
  };

  const handleToggleFilterPanel = () => {
    setShowFilterPanelState((prevState) => !prevState);
  };

  const handleReset = () => {
    setShowFilterPanelState(false);
    setApiDataState(apiDataRef.current);
  };

  const handleSearchQuery = async (queryState: string) => {
    const data = apiDataRef?.current?.length
      ? apiDataRef.current
      : await handleFetchData("get");

    if (queryState === "") return setApiDataState(data);

    const searchData = data?.filter((data: ApiData) => {
      const queries = queryState.split(",");

      return queries.some((item: string) => {
        return (
          ` ${data.order_number}`
            .toLowerCase()
            .includes(item.trim().toLowerCase()) ||
          ` ${data.item}`.toLowerCase().includes(item.trim().toLowerCase())
        );
      });
    });

    searchData.length
      ? setApiDataState(searchData)
      : setApiDataState(apiDataRef.current);
    !searchData.length && alert("No entries found");
  };

  const handleSearchByQueryObject = async (qObject: QueryObjectState) => {
    console.log({ qObject });
    const data = apiDataRef?.current?.length
      ? apiDataRef.current
      : await handleFetchData("get");

    const filtered = data.filter((d) => {
      const matchesOrder = !qObject.order
        ? true
        : `${d.order_number}`
            .toLowerCase()
            .includes(qObject.order.trim().toLowerCase());
      const matchesItem = !qObject.item
        ? true
        : `${d.item}`.toLowerCase().includes(qObject.item.trim().toLowerCase());
      const matchesType = !qObject.type.length
        ? true
        : qObject.type.some((i: string) => {
            return `${d.type}`.toLowerCase().includes(i.trim().toLowerCase());
          });
      const matchesCategory = !qObject.category
        ? true
        : ` ${d.category}`
            .toLowerCase()
            .includes(qObject.category.trim().toLowerCase());

      return matchesCategory && matchesType && matchesOrder && matchesItem;
    });

    filtered.length
      ? setApiDataState(filtered)
      : setApiDataState(apiDataRef.current);
    !filtered.length && alert("No entries found");
  };

  return (
    <Container>
      <Container width="auto">
        <SidePanel />
      </Container>
      <Container flexDirection="column">
        <NavBar />
        <ItemSearchHeader
          onFilter={handleToggleFilterPanel}
          setSearchQuery={handleSearchQuery}
          numberOfFilteredItems={apiDataState.length}
        />
        {apiDataState.length ? (
          <DataTable data={apiDataState} />
        ) : (
          <FetchData loading={loadingState} onFetchData={handleFetchData} />
        )}
      </Container>
      {showFilterPanelState && (
        <FilterPanel
          onCancel={handleToggleFilterPanel}
          onReset={handleReset}
          onFilterByQueryObject={handleSearchByQueryObject}
        />
      )}
    </Container>
  );
};

export default App;
