import React from "react";
import { BiWine } from "react-icons/bi";

import "../../assets/css/navbar.css";

function NavigationBar() {
  return (
    <>
      <nav className="d-flex align-items-center justify-content-around">
        <div className="logo d-flex align-items-center">
          <BiWine color="#DE9E48" size={"40px"} />
          <p className="p1">
            COCK<span>TAIL</span>
          </p>
        </div>
        <div className="link"></div>
        <div className="sosmed d-flex justify-content-end"></div>
      </nav>
    </>
  );
}

export default NavigationBar;
