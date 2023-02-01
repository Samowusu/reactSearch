import React, { useEffect, useState } from "react";
import "./App.css";
import SidePanel from "./components/SidePanel";
import NavBar from "./components/NavBar";
import ItemSearchHeader from "./components/ItemSearchHeader";
import FetchData from "./components/FetchData";
import FilterPanel from "./components/FilterPanel";
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

const App = () => {
  const [showFilterPanelState, setShowFilterPanelState] = useState(false);
  const [showDataTableState, setShowDataTableState] = useState(false);
  const [queryState, setQueryState] = useState("");

  const [apiDataState, setApiDataState] = useState<any>([]);
  //get random number between two integers
  const duration = [2000, 3000, 4000, 6000];

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    const response = new Promise((res, rej) => {
      setTimeout(() => {
        res(tableData);
      }, duration[getRandomNumber(0, 3)]);
    });
    response.then((data) => {
      setApiDataState(data);
    });
  }, []);

  const handleToggleFilterPanel = () => {
    setShowFilterPanelState((prevState) => !prevState);
  };

  const handleShowDataTable = () => {
    setShowDataTableState(true);
  };

  const handleReset = () => {
    setShowDataTableState(false);
    setQueryState("");
    setShowFilterPanelState(false);
  };

  const handleSearchByFilterPanel = (filteredArr: ApiData[]) => {
    setApiDataState(filteredArr);
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
          setSearchQuery={setQueryState}
          onFetchData={handleShowDataTable}
        />
        {showDataTableState ? (
          <DataTable searchQuery={queryState} apiData={apiDataState} />
        ) : (
          <FetchData onFetchData={handleShowDataTable} />
        )}
      </Container>
      {showFilterPanelState && (
        <FilterPanel
          onCancel={handleToggleFilterPanel}
          onReset={handleReset}
          onFilterData={handleSearchByFilterPanel}
          onShowTable={handleShowDataTable}
        />
      )}
    </Container>
  );
};

export default App;
