import type { SxProps, Theme } from "@mui/material/styles";

type ProductDetailStyles = Record<string, SxProps<Theme>>;

export const getProductDetailStyles = (): ProductDetailStyles => {
  return {
    container: {
      pb: 6,
    },
    backLink: {
      display: "inline-flex",
      alignItems: "center",
      gap: 1,
      color: "text.secondary",
      textDecoration: "none",
      mb: 4,
      fontWeight: 600,
      transition: "color 0.2s",
      "&:hover": { color: "primary.main" },
    },
    grid: {
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
      gap: { xs: 4, md: 8 },
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      p: 4,
      boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
      position: "sticky",
      top: "100px",
    },
    image: {
      maxWidth: "100%",
      maxHeight: "500px",
      objectFit: "contain",
    },
    infoContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
    },
    descriptionCard: {
      p: 4,
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
      backgroundColor: "#ffffff",
    },
    actionsCard: {
      p: 4,
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
      backgroundColor: "#ffffff",
    },
    attributeRow: {
      display: "flex",
      borderBottom: "1px solid #f0f0f0",
      py: 1.5,
      "&:last-child": { borderBottom: "none" },
    },
    attributeLabel: {
      fontWeight: 600,
      width: "40%",
      color: "text.secondary",
    },
    attributeValue: {
      width: "60%",
      fontWeight: 500,
    },
    actionSection: {
      mb: 3,
    },
  };
};
