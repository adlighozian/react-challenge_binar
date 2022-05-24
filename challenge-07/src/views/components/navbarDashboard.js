import React from "react";

import "../../assets/css/components/navbarDashboard.css";

function navbarDashboard() {
  return (
    <section>
      <nav>
        <div className="navbarDashboard d-flex justify-content-between">
          <i id="menu-btn" className="bx bx-menu"></i>
          <div className="profile d-flex align-items-center">
            <div className="img d-flex align-items-center justify-content-center overflow-hidden"></div>
            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                Hi, Adli Ghozian
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a
                    href="#"
                    className="dropdown-item d-flex align-items-center justify-content-center"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default navbarDashboard;
