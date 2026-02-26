import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#000000', contrastText: '#ffffff' },
    secondary: { main: '#f5f5f5' },
    background: { default: '#f8f9fa', paper: '#ffffff' },
  },
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: '8px' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
      },
    },
  },
});