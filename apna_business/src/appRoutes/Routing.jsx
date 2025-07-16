import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import RegisterBusiness from "../pages/RegisterBusiness";
import NotFoundPage from "../pages/NotFoundPage";
import Profile from "../pages/Profile";
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterBusiness />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
