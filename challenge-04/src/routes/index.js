import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/pages/home";
import Cari from "../views/pages/cari";

function Router(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cari" element={<Cari />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
