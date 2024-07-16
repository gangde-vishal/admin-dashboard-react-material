import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationAddOutlined,
  Person2Outlined,
  SearchOutlined,
  SettingsApplicationsOutlined,
} from "@mui/icons-material";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
        <IconButton sx={{ p: 1 }} type="button">
          <SearchOutlined />
        </IconButton>
      </Box>
      {/* ICONS SECTION */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationAddOutlined />
        </IconButton>
        <IconButton>
          <SettingsApplicationsOutlined />
        </IconButton>
        <IconButton>
          <Person2Outlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
