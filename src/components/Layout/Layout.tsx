import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { getLayoutStyles } from "./styles";

export const Layout = () => {
  const styles = getLayoutStyles();

  return (
    <Box sx={styles.mainContainer}>
      <Header />

      <Box component="main" sx={styles.contentWrapper}>
        <Outlet />
      </Box>
    </Box>
  );
};
