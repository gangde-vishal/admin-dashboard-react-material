import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

const Team = () => {
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
    {
      field: "age",
      headerName: "AGE",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 110,
    },
    { field: "phone", headerName: "PHONE NUMBER", width: 150 },
    {
      field: "access",
      headerName: "ACCESS",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="10px auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[500]
            }
            borderRadius="5px"
          >
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subTitle="Managing the team members" />
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
          ".MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          ".MuiDataGrid-footerContainer": {
            border: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
