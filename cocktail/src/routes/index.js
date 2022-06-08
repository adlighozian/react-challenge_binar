import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../views/layouts/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
