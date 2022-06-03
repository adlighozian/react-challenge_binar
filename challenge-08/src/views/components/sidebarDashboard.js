import React from "react";

import icon_home from "../../assets/img/fi_home.svg";
import icon_truck from "../../assets/img/fi_truck.svg";

import "../../assets/css/components/sidebarDashboard.css";

function sidebarDashboard() {
  return (
    <section>
      <section className="sidebar">
        {/* SIDEBAR_ICON START */}
        <div className="sidebarIcon position-absolute">
          <div className="top d-flex align-items-center justify-content-center">
            <div className="img"></div>
          </div>
          <a className="text-decoration-none" href="#">
            <div className="menu overflow-hidden d-flex align-items-center justify-content-center flex-column">
              <img src={icon_home}></img>
              <p>Dashboard</p>
            </div>
          </a>
          <a className="text-decoration-none" href="#">
            <div className="menu active overflow-hidden d-flex align-items-center justify-content-center flex-column">
              <img src={icon_truck}></img>
              <p>Cars</p>
            </div>
          </a>
        </div>
        {/* SIDEBAR_ICON END */}
        {/* SIDEBAR_MENU START */}
        <div id="#sidebar" className="sidebarMenu" id="sidebar">
          <div className="top d-flex align-items-center">
            <div className="logo"></div>
          </div>
          <div className="bottom">
            <div className="head d-flex align-items-center justify-content-center">
              <div className="text d-flex align-items-center justify-content-center">
                <p>List Car</p>
              </div>
            </div>
            <div className="menu"></div>
          </div>
        </div>

        {/* SIDEBAR_MENU END */}
      </section>
    </section>
  );
}

export default sidebarDashboard;
