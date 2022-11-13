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
