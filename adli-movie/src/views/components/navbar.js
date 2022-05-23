import React from "react";
import { BiAccessibility } from "react-icons/bi";
import { Link } from "react-router-dom";

import "../../assets/css/components/navbar.css";

function navigationBar() {
  return (
    <section>
      <div className="nav d-flex flex-column">
        <div className="logo d-flex align-items-center justify-content-center">
          <Link
            to={"#"}
            className="link text-decoration-none d-flex  align-items-center"
          >
            <BiAccessibility size={30} color={"red"} />
            <p className="text-lg text-uppercase fw-bold">Movies</p>
          </Link>
        </div>
        <div className="category"></div>
        <div className="search"></div>
      </div>
    </section>
  );
}

export default navigationBar;
