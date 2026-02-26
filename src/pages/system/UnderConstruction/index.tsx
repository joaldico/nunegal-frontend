import {
  Construction as ConstructionIcon
} from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { getStylesSx } from "./styles";

export default function UnderConstruction() {
  const styles = getStylesSx();

  return (
    <Box className="animate-fade-in" sx={styles.mainContainer}>
      <Container maxWidth="sm">
        <Box sx={styles.box}>
          <Box sx={styles.iconContainer}>
            <ConstructionIcon sx={styles.icon} />
          </Box>

          <Typography
            variant="h4"
            fontWeight="bold"
            color="#0F172A"
            gutterBottom
          >
            En Construcción
          </Typography>

          <Typography variant="body1" color="#64748B" sx={styles.message}>
            Estamos trabajando en este módulo para brindarte la mejor
            experiencia. Pronto estará disponible para la gestión.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
