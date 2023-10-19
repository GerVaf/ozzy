import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FormSubmit from "./pages/FormSubmit";
import DataTable from "./pages/DataTable";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/form-submit" element={<FormSubmit />} />
      <Route path="/table" element={<DataTable />} />
    </Routes>
  );
};

export default App;
