import createTheme from "@mui/material/styles/createTheme";

export let theme = createTheme({
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

theme = createTheme(theme, {
  buttons: {
    main: "orange",
  },
});
