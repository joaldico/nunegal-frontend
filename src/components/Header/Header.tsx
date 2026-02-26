import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import {
  AppBar,
  Badge,
  Box,
  Breadcrumbs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { useCart } from "../../providers/CartProvider";
import { getHeaderStyles } from "./styles";

export const Header = () => {
  const styles = getHeaderStyles();
  const { cartCount } = useCart();
  const location = useLocation();

  const isProductDetail = location.pathname.includes("/product/");

  return (
    <AppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.leftSection}>
          <Box component={Link} to="/" sx={styles.logoContainer}>
            <SmartphoneIcon fontSize="large" />
            <Typography variant="h5" sx={styles.logoText}>
              ITX
            </Typography>
          </Box>

          <Breadcrumbs aria-label="breadcrumb" sx={styles.breadcrumbs}>
            <Link to="/">Catálogo</Link>
            {isProductDetail && (
              <Typography>Detalle del Dispositivo</Typography>
            )}
          </Breadcrumbs>
        </Box>

        <Box>
          <Badge badgeContent={cartCount} sx={styles.cartBadge}>
            <ShoppingCartIcon htmlColor="#ffffff" />
          </Badge>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
