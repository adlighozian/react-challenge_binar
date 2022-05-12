import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import CariMobil from "../pages/CariMobil";
import Result from "../pages/Result";
import auth from "../utils/auth";

const RouterPages = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CariMobil />} />
          <Route path="cari" element={<Result />} />
          <Route path="cari/detail/:id" element={<Detail />} />
          <Route path="cari/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

require("./utils/auth");

router.post("/register,register");

export default RouterPages;
