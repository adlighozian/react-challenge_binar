import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="App">
      <h1>ini halaman Dashboard</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Dashboard;
