import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid/components";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

import Header from "../../components/Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

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
    {
      field: "age",
      headerName: "AGE",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 110,
    },
    { field: "phone", headerName: "PHONE NUMBER", width: 150 },
    { field: "address", headerName: "ADDRESS", width: 200 },
    { field: "city", headerName: "CITY", width: 150 },
    { field: "zipCode", headerName: "ZIPCODE", width: 150 },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subTitle="List of contacts for future reference"
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
          "& .MuiDataGrid-toolbarContainer": {
            backgroundColor: "#fff",
            color:`${colors.grey[500]} !important`

          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: CustomToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
