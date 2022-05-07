import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#AE00FF",
    },
    secondary: {
      main: "#f50057",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#efefef",
        },
      },
    },
  },
});
