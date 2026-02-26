import type { SxProps, Theme } from "@mui/material/styles";

type HeaderStyles = Record<string, SxProps<Theme>>;

export const getHeaderStyles = (): HeaderStyles => {
  return {
    appBar: {
      backgroundColor: "primary.main", 
      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      position: "sticky",
      top: 0,
      zIndex: (theme) => theme.zIndex.drawer + 1,
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "70px",
      px: { xs: 2, sm: 4, md: 6 },
    },
    leftSection: {
      display: "flex",
      alignItems: "center",
      gap: { xs: 2, md: 5 }, 
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: "primary.contrastText",
      transition: "opacity 0.2s",
      "&:hover": {
        opacity: 0.8,
      },
    },
    logoText: {
      fontWeight: 800,
      letterSpacing: "1px",
      ml: 1,
      display: { xs: "none", sm: "block" }, 
    },
    breadcrumbs: {
      color: "secondary.main",
      "& .MuiBreadcrumbs-separator": {
        color: "secondary.main",
        opacity: 0.5,
      },
      "& .MuiTypography-root": {
        color: "secondary.main",
        fontWeight: 600,
      },
      "& a": {
        color: "primary.contrastText",
        textDecoration: "none",
        opacity: 0.8,
        transition: "opacity 0.2s",
        "&:hover": {
          opacity: 1,
          textDecoration: "underline",
        },
      },
    },
    cartBadge: {
      "& .MuiBadge-badge": {
        backgroundColor: "secondary.main",
        color: "primary.main",
        fontWeight: 800,
      },
    },
  };
};