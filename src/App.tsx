import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/homepage/Homepage";
import Challenge from "./views/challenge/Challenge";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./views/theme/DO";
import SignIn from "./views/auth/SignIn";
import SignUpSide from "./views/auth/SignUp";
import Landingpage from "./views/landing/Landingpage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/challenge/:id" element={<Challenge />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUpSide />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
