import { alpha, type SxProps, type Theme } from "@mui/material/styles";

type ToolbarStyles = Record<string, SxProps<Theme>>;

export const getStylesSx = (): ToolbarStyles => {
  return {
    mainContainer: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      p: 6,
      bgcolor: "white",
      borderRadius: 4,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
      border: "1px solid #E2E8F0",
    },
    iconContainer: {
      width: 80,
      height: 80,
      borderRadius: "50%",
      bgcolor: alpha("#3B82F6", 0.1),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mb: 3,
    },
    icon: { fontSize: 40, color: "#3B82F6" },
    message: { mb: 4, maxWidth: "80%" },
    button: {
      color: "#64748B",
      borderColor: "#E2E8F0",
      textTransform: "none",
      fontWeight: "bold",
      px: 3,
      py: 1,
      borderRadius: 2,
      "&:hover": {
        borderColor: "#CBD5E1",
        bgcolor: "#F1F5F9",
        color: "#0F172A",
      },
    },
  };
};
