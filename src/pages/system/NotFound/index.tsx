import { HelpOutline } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { getStylesSx } from "./styles";

export default function NotFoundPage() {
  const styles = getStylesSx();

  return (
    <Box sx={styles.mainContainer}>
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Box sx={styles.box}>
          <HelpOutline sx={styles.helper} />
        </Box>

        <Typography variant="h1" sx={styles.message}>
          404
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
          color="secondary"
          gutterBottom
          sx={{ mt: -2 }}
        >
          Página no encontrada
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
          Lo sentimos, la ruta que intentas consultar no existe o no tienes
          permisos para verla.
        </Typography>
      </Container>
    </Box>
  );
}
