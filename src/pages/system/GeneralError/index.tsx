import { ReportProblem } from "@mui/icons-material";
import { Box, Container, Paper, Typography } from "@mui/material";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { getStylesSx } from "./styles";

export default function GeneralError() {
  const error = useRouteError();
  const navigate = useNavigate();
  const styles = getStylesSx();

  let errorMessage = "Ha ocurrido un error inesperado.";
  let errorTitle = "Error del Sistema";

  if (isRouteErrorResponse(error)) {
    errorTitle = `${error.status} ${error.statusText}`;
    errorMessage = error.data?.message || "Hubo un problema con la petición.";
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <Box sx={styles.mainContainer}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={styles.paper}>
          <Box sx={styles.box}>
            <ReportProblem sx={styles.error} />
          </Box>

          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
          >
            {errorTitle}
          </Typography>

          <Typography variant="body2" sx={styles.errorMessage}>
            {errorMessage}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
