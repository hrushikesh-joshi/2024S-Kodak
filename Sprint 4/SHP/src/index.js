import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginRegister from "./LoginRegister";
import Dashboard from "./Dashboard";
import ResumeUpload from "./ResumeUpload"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="LoginRegister" element={<LoginRegister />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="ResumeUpload" element={<ResumeUpload />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);