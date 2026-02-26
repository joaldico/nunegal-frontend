import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import type { Product } from "../../models/Product";
import { ProductService } from "../../services/ProductService";
import { getProductListStyles } from "./styles";

export const ProductList = () => {
  const styles = getProductListStyles();
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await ProductService.getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const searchTerm = search.toLowerCase().trim();
    if (!searchTerm) return products;

    return products.filter(
      (product) =>
        product.brand.toLowerCase().includes(searchTerm) ||
        product.model.toLowerCase().includes(searchTerm),
    );
  }, [products, search]);

  const handleProductClick = (id: string) => {
    navigate(`/product/${id}`);
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

  return (
    <Box sx={styles.container}>
      <Box sx={styles.searchContainer}>
        <TextField
          variant="outlined"
          placeholder="Buscar por marca o modelo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={styles.field}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      <Box sx={styles.grid}>
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            sx={styles.card}
            onClick={() => handleProductClick(product.id)}
          >
            <Box sx={styles.mediaContainer}>
              <Box
                component="img"
                src={product.imgUrl}
                alt={product.model}
                sx={styles.image}
              />
            </Box>
            <CardContent sx={styles.cardContent}>
              <Typography sx={styles.brand}>{product.brand}</Typography>
              <Typography variant="h6" sx={styles.model}>
                {product.model}
              </Typography>
              <Typography sx={styles.price}>
                {product.price ? `${product.price}€` : "Consultar"}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {filteredProducts.length === 0 && (
        <Typography textAlign="center" color="text.secondary" mt={4}>
          No se encontraron productos que coincidan con la búsqueda.
        </Typography>
      )}
    </Box>
  );
};
