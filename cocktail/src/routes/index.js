import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../views/layouts/home";
import Error from "../views/layouts/error";
import Detail from "../views/layouts/detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
