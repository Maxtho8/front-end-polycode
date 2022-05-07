import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/homepage/Homepage";
import Challenge from "./views/challenge/Challenge";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./views/theme/DO";
import NavBar from "./components/navigation/NavBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
