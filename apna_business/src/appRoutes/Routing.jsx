import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import RegisterBusiness from "../pages/RegisterBusiness";
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<RegisterBusiness />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
