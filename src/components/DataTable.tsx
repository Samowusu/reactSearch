import { Container } from "./commons/Container";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ApiData } from "../App";

interface DataTableProps {
  data: ApiData[];
}
const DataTable = ({ data }: DataTableProps) => {
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
          rowData={data}
          columnDefs={columns}
          pagination
          paginationPageSize={20}
        />
      </div>
    </Container>
  );
};

export default DataTable;
