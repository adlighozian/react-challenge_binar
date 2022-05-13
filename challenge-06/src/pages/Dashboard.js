import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavigationBar from "../components/Navbar";
import "../assets/css/Dashboard.css";

function Login() {
  return (
    <section>
      <NavigationBar />
      <div className="main">
        <div className="sidebar d-flex align-items-center justify-content-center">
          <p>ini untuk admin</p>
        </div>
      </div>
    </section>
  );
}
export default Login;
