import type { SxProps, Theme } from "@mui/material/styles";

type LayoutStyles = Record<string, SxProps<Theme>>;

export const getLayoutStyles = (): LayoutStyles => {
  return {
    mainContainer: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "background.default",
      width: "100%",
    },
    contentWrapper: {
      flexGrow: 1,
      width: "100%",
      padding: { xs: 2, sm: 4, md: 6 },
    },
  };
};