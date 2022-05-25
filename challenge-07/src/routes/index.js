import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "../views/layouts/home";
import Sewa from "../views/layouts/sewa";
import ListCar from "../views/layouts/listCar";
import Detail from "../views/layouts/detailCar";
import Tiket from "../views/layouts/tiket";
import Dashboard from "../views/layouts/dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sewa" element={<Sewa />} />
        <Route path="/listcar" element={<ListCar />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/tiket" element={<Tiket />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
