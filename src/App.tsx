import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// Components
import { LandingPage, NotFoundPage } from "~components";
import { colorPrimary, colorSecondary, colorTertiary } from "./colors";
// Style

import "./sass/index.sass";
import "./App.sass";

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, Arial",
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: colorPrimary,
    secondary: colorSecondary,
    mode: "dark",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('Raleway'), local('Raleway-Regular'), url(fonts/Raleway/Raleway-Regular.ttf) format('ttf');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      `,
    },
    MuiSkeleton: {
      defaultProps: {
        sx: {
          bgcolor: "#555",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        // disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "20px",
          color: "#fff",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: colorTertiary[800],
        },
      },
    },
  },
});

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
