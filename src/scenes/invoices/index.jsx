import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";

import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "name",
      headerName: "NAME",
      cellClassName: "name-column--cell",
      width: 150,
    },
    { field: "email", headerName: "EMAIL", width: 160 },

    { field: "cost", headerName: "COST", width: 150 , renderCell : (params) =>(
      <Typography color={colors.greenAccent[500]} sx={{mt:'15px'}}>
        ${params.row.cost}
      </Typography>
    )},
    { field: "phone", headerName: "PHONE NUMBER", width: 200 },
    { field: "date", headerName: "DATE", width: 150 },
  ];

  return (
    <Box m="20px">
      <Header
        title="INVOICES"
        subTitle="List of Invoice Balances"
      />
      <Box
        m="40px 0 0 0"
        sx={{
          height: "75vh",
          width: "100%",
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          ".name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .css-8ikrwr-MuiDataGrid-root .MuiDataGrid-container--top [role=row],":
            {
              background: colors.blueAccent[700],
              borderBottom: "none",
            },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            border: "none",
            backgroundColor: colors.blueAccent[700],

          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection/>
      </Box>
    </Box>
  );
};

export default Invoices;
