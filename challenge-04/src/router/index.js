import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/home";
import About from "../views/detail/about";

function Router(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:slug" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
