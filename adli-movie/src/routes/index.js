import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../views/pages/home";

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
