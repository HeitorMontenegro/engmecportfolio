import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    main: {
      main: "#289EBF",
    },
    dark: {
      main: "#0F3953",
    },
    light: {
      main: "#FAF1E9",
    },
    gradient: {
      main:
        "linear-gradient(90deg, rgba(23,124,159,1) 0%, rgba(25,119,190,1) 50%, rgba(2,134,161,1) 100%)",
    },
  },
  typography: {
    fontFamily: ["Sofia Sans Semi Condensed", "sans-serif"].join(","),
  },
});

export default theme;
