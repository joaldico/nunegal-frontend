import type { SxProps, Theme } from "@mui/material/styles";

type ToolbarStyles = Record<string, SxProps<Theme>>;

export const getStylesSx = (): ToolbarStyles => {
  return {
    mainContainer: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      width: 120,
      height: 120,
      bgcolor: "white",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mx: "auto",
      mb: 4,
      boxShadow: 3,
      animation: "float 6s ease-in-out infinite",
    },
    helper: { fontSize: 60, color: "black" },
    message: {
      fontSize: "6rem",
      fontWeight: 900,
      color: "black",
      opacity: 0.1,
      lineHeight: 1,
    },
  };
};
