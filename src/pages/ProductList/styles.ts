import type { SxProps, Theme } from "@mui/material/styles";

type ProductListStyles = Record<string, SxProps<Theme>>;

export const getProductListStyles = (): ProductListStyles => {
  return {
    container: {
      pb: 4,
    },
    searchContainer: {
      display: "flex",
      justifyContent: "flex-end",
      mb: 4,
    },
    field: {
      width: { xs: "100%", sm: "300px" },
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      },
      gap: 3,
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
      transition: "transform 0.2s ease-in-out, box-shadow 0.2s",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      },
    },
    mediaContainer: {
      p: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff",
      height: "250px",
    },
    image: {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
    },
    cardContent: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
    },
    brand: {
      color: "text.secondary",
      fontSize: "0.875rem",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    model: {
      fontWeight: 600,
      mt: 0.5,
      mb: 1,
    },
    price: {
      fontWeight: 700,
      fontSize: "1.25rem",
      mt: "auto",
    },
  };
};
