import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Screens/Dashboard";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" Component={Dashboard} />
    </Routes>
  );
}

export default Router;
