import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { Container } from "./commons/Container";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import tableData from "../mockData/MOCK_DATA.json";

interface DataTableProps {
  searchQuery?: any;
}
const DataTable = ({ searchQuery }: DataTableProps) => {
  const [apiDataState, setApiDataState] = useState<any>([]);
  // const [filteredDataState, setFilteredDataState] = useState<any>([]);
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

  const filteredArray = apiDataState?.filter((data: any) => {
    const queries = searchQuery.split(",");

    return queries.some((item: string) => {
      return (
        ` ${data.order_number}`
          .toLowerCase()
          .includes(item.trim().toLowerCase()) ||
        ` ${data.item}`.toLowerCase().includes(item.trim().toLowerCase())
      );
    });
  });

  const columns = [
    { field: "id", sortable: true },
    { field: "order_number", sortable: true },
    { field: "type", sortable: true },
    { field: "item", sortable: true },
    { field: "category", sortable: true },
    { field: "description", sortable: true },
  ];
  return (
    <Container height="100%">
      <div
        className="ag-theme-alpine"
        style={{ width: "100%", height: "100%" }}
      >
        <AgGridReact
          rowData={filteredArray}
          columnDefs={columns}
          pagination
          paginationPageSize={20}
        />
      </div>
    </Container>
  );
};

export default DataTable;
