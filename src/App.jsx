import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FormSubmit from "./pages/FormSubmit";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form_submit" element={<FormSubmit />} />
    </Routes>
  );
};

export default App;
