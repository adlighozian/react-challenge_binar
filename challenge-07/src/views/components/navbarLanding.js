import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";

import "../../assets/css/components/navbarLanding.css";

function NavigationBar() {
  return (
    <section>
      <nav class="navbar d-flex align-item-center justify-content-between ">
        {/* LEFT_START */}
        <div className="left d-flex align-items-center ">
          <Link to={"/"}>
            <img src={logo}></img>
          </Link>
        </div>
        {/* LEFT_END */}
        {/* RIGHT_START */}
        <div className="right d-flex align-items-center justify-content-between">
          <a href="#service">Our Services</a>
          <a href="#">Why Us</a>
          <a href="#">Testimonial</a>
          <a href="#">FAQ</a>
          <a href="dashboard">
            <button type="button" class="btn btn-success">
              Login
            </button>
          </a>
        </div>
        {/* RIGHT_END */}
      </nav>
    </section>
  );
}

export default NavigationBar;
