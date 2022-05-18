import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/components/navbar.css";

function NavigationBar() {
  return (
    <section>
      <nav class="navbar navbar-light navbar-expand-md">
        <div class="container">
          <a class="navbar-brand" href="#">
            Binar Car Rental
          </a>
          <button class="navbar-toggler" type="button"></button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto align-items-center">
              <a class="nav-link scroll" href="#service">
                Our Services
              </a>
              <a class="nav-link scroll" href="#why-us">
                Why Us
              </a>
              <a class="nav-link scroll" href="#testimonial">
                Testimonial
              </a>
              <a class="nav-link scroll" href="#faq">
                FAQ
              </a>
              <a class="nav-link btn btn-register" href="#">
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default NavigationBar;
