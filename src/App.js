import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./views/LandPage";
import PrivateRoutes from "./routes/PrivateRoutes";

import DashboardHome from "./views/dashboard/DashView";
import BirthView from "./views/dashboard/BirthView";
import UsersView from "./views/dashboard/UsersView";
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/births" element={<BirthView />} />
        <Route path="/dashboard/users" element={<UsersView />} />
      </Route>
    </Routes>
  );
}

export default App;
