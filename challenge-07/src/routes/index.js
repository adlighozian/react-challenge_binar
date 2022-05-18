import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "../views/pages/home";
import Dashboard from "../views/pages/dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
