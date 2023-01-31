import React, { useState } from "react";
import "./App.css";
import SidePanel from "./components/SidePanel";
import NavBar from "./components/NavBar";
import ItemSearchHeader from "./components/ItemSearchHeader";
import FetchData from "./components/FetchData";
import FilterPanel from "./components/FilterPanel";
import DataTable from "./components/DataTable";
import { Container } from "./components/commons/Container";
import CheckBoxComponent from "./components/commons/CheckBoxComponent";

const App = () => {
  const [showFilterPanelState, setShowFilterPanelState] = useState(false);
  const [showDataTableState, setShowDataTableState] = useState(false);
  const [queryState, setQueryState] = useState("");

  const handleToggleFilterPanel = () => {
    setShowFilterPanelState((prevState) => !prevState);
  };

  const handleShowDataTable = () => {
    setShowDataTableState(true);
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
          <DataTable searchQuery={queryState} />
        ) : (
          <FetchData onFetchData={handleShowDataTable} />
        )}
      </Container>
      {showFilterPanelState && (
        <FilterPanel onCancel={handleToggleFilterPanel} />
      )}
    </Container>
  );
};

export default App;
