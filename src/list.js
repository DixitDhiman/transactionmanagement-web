import React, { useState, useEffect } from 'react';
import ApiClient from "./api-client";
import env from './environment';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const List = ({ handleEvent }) => {

  useEffect(() => {
    ApiClient.get(`${env.apiUrl}/transaction`).then((response) => {
      if (response.statusCode === 200) {
        let newdata = { ...data };
        newdata.rowData = response.data;
        setData(newdata);
      }
    });
  }, []);

  const [data, setData] = useState({
    columnDefs: [
      { headerName: "Date", field: "createdAt", sortable: true },
      { headerName: "Description", field: "description", sortable: true },
      { headerName: "Credit", field: "credit", sortable: true },
      { headerName: "Debit", field: "debit", sortable: true },
      { headerName: "Running Balance", field: "balance", sortable: true }],
    rowData: [
    ]
  });

  return (
    <>
      <button type="button" className="btn btn-primary btn-lg" onClick={() => handleEvent()}>Add Transaction</button>

      <div className="ag-theme-alpine" style={{ height: '200px', width: '600px' }}>
        <AgGridReact
          columnDefs={data.columnDefs}
          rowData={data.rowData}>
        </AgGridReact>
      </div>
    </>
  );
}

export default List;
