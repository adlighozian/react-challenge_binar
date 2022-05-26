import React from "react";

import SidebarDashboard from "../components/sidebarDashboard";
import NavbarDashboard from "../components/navbarDashboard";

import "../../assets/css/layouts/dashboard.css";

function dashboardLayout() {
  return (
    <section>
      <section className="dashboard d-flex">
        <div className="left">
          {/* SIDEBAR_START */}
          <SidebarDashboard />
          {/* SIDEBAR_END */}
        </div>
        <div className="right">
          {/* NAVBAR_START */}
          <NavbarDashboard />
          {/* NAVBAR_END */}
          {/* MAIN_START */}
          <div className="main">
            <div className="top"></div>
          </div>
          {/* MAIN_END */}
        </div>
      </section>
    </section>
  );
}

export default dashboardLayout;
