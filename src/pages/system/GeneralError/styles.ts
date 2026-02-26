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
    paper: { p: 5, textAlign: "center", borderRadius: 4 },
    box: {
      display: "inline-flex",
      p: 2,
      borderRadius: "50%",
      bgcolor: "#FEF2F2",
      mb: 3,
    },
    error: { fontSize: 50, color: "red" },
    errorMessage: {
      fontFamily: "monospace",
      bgcolor: "grey.100",
      p: 2,
      borderRadius: 2,
      mb: 4,
      color: "primary.main",
      wordBreak: "break-all",
    },
  };
};
