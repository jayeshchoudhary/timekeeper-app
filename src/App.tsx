import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ScreenA from "./pages/screen-a/screen-a";
import ScreenB from "./pages/screen-b/screen-b";
import ScreenC from "./pages/screen-c/screen-c";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/screen-a" element={<ScreenA />} />
        <Route path="/screen-b" element={<ScreenB />} />
        <Route path="/screen-c" element={<ScreenC />} />
        <Route path="*" element={<Navigate to="/screen-a" />} />
      </Routes>
    </Container>
  );
};

export default App;
