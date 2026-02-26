import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import type { ProductDetail as IProductDetail } from "../../models/Product";
import { useCart } from "../../providers/CartProvider";
import { ProductService } from "../../services/ProductService";
import { getProductDetailStyles } from "./styles";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const styles = getProductDetailStyles();
  const { updateCartCount, cartCount } = useCart();

  const [product, setProduct] = useState<IProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [addingToCart, setAddingToCart] = useState(false);

  const [colorCode, setColorCode] = useState<number | "">("");
  const [storageCode, setStorageCode] = useState<number | "">("");

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const data = await ProductService.getProductById(id);
        setProduct(data);

        if (data.options?.colors?.length > 0) {
          setColorCode(data.options.colors[0].code);
        }
        if (data.options?.storages?.length > 0) {
          setStorageCode(data.options.storages[0].code);
        }
      } catch (error) {
        console.error("Error fetching product detail:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!product || colorCode === "" || storageCode === "") return;

    try {
      setAddingToCart(true);
      const response = await ProductService.addToCart({
        id: product.id,
        colorCode: Number(colorCode),
        storageCode: Number(storageCode),
      });

      updateCartCount(cartCount + response.count);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setAddingToCart(false);
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return <Alert severity="error">No se pudo cargar el producto.</Alert>;
  }

  const renderAttribute = (label: string, value?: string | string[]) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return null;
    const finalValue = Array.isArray(value) ? value.join(", ") : value;
    return (
      <Box sx={styles.attributeRow}>
        <Typography sx={styles.attributeLabel}>{label}</Typography>
        <Typography sx={styles.attributeValue}>{finalValue}</Typography>
      </Box>
    );
  };

  return (
    <Box sx={styles.container}>
      <Box component={Link} to="/" sx={styles.backLink}>
        <ArrowBackIcon fontSize="small" />
        <Typography>Volver al catálogo</Typography>
      </Box>

      <Box sx={styles.grid}>
        <Box>
          <Box sx={styles.imageContainer}>
            <Box
              component="img"
              src={product.imgUrl}
              alt={product.model}
              sx={styles.image}
            />
          </Box>
        </Box>

        <Box sx={styles.infoContainer}>
          <Box sx={styles.descriptionCard}>
            <Typography variant="h4" fontWeight="800" mb={1}>
              {product.model}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              mb={3}
              textTransform="uppercase"
            >
              {product.brand}
            </Typography>

            <Typography variant="h5" color="primary" fontWeight="700" mb={4}>
              {product.price ? `${product.price}€` : "Precio a consultar"}
            </Typography>

            <Typography variant="h6" mb={2} fontWeight="700">
              Especificaciones
            </Typography>
            <Box>
              {renderAttribute("CPU", product.cpu)}
              {renderAttribute("RAM", product.ram)}
              {renderAttribute("Sistema Operativo", product.os)}
              {renderAttribute("Resolución", product.displayResolution)}
              {renderAttribute("Batería", product.battery)}
              {renderAttribute("Cámara Principal", product.primaryCamera)}
              {renderAttribute("Cámara Secundaria", product.secondaryCmera)}
              {renderAttribute("Dimensiones", product.dimentions)}
              {renderAttribute("Peso", product.weight)}
            </Box>
          </Box>

          <Box sx={styles.actionsCard}>
            <Typography variant="h6" mb={3} fontWeight="700">
              Opciones de compra
            </Typography>

            <Box sx={styles.actionSection}>
              <FormControl fullWidth size="small">
                <InputLabel>Color</InputLabel>
                <Select
                  value={colorCode}
                  label="Color"
                  onChange={(e) => setColorCode(e.target.value as number | "")}
                  MenuProps={{ disableScrollLock: true }}
                >
                  {product.options?.colors?.map((color) => (
                    <MenuItem key={color.code} value={color.code}>
                      {color.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={styles.actionSection}>
              <FormControl fullWidth size="small">
                <InputLabel>Almacenamiento</InputLabel>
                <Select
                  value={storageCode}
                  label="Almacenamiento"
                  onChange={(e) => setStorageCode(e.target.value)}
                  MenuProps={{ disableScrollLock: true }}
                >
                  {product.options?.storages?.map((storage) => (
                    <MenuItem key={storage.code} value={storage.code}>
                      {storage.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleAddToCart}
              disabled={addingToCart || colorCode === "" || storageCode === ""}
              sx={{ mt: 2, py: 1.5, fontSize: "1.1rem" }}
            >
              {addingToCart ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Añadir al carrito"
              )}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
