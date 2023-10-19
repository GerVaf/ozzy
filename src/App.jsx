import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FormSubmit from "./pages/FormSubmit";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/form_submit" element={<FormSubmit />} />
    </Routes>
  );
};

export default App;
