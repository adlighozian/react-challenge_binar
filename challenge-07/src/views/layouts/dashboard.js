import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../api/store/cars/carsSlice";
import { Card, Button } from "react-bootstrap";

import SidebarDashboard from "../components/sidebarDashboard";
import NavbarDashboard from "../components/navbarDashboard";
import CardDashboard from "../components/cardDashboard";
import plus from "../../assets/img/fi_plus.svg";

import "../../assets/css/layouts/dashboard.css";

function DashboardLayout() {
  // const dispatch = useDispatch();
  // const { cars, isLoading } = useSelector((state) => state.cars);

  // useEffect(() => {
  //   dispatch(getCars());
  // }, [dispatch]);
  // console.log(cars);

  // const listcar = cars.map((car) => {
  //   return car;
  // });

  // console.log(listcar);

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
            <div className="top d-flex justify-content-end align-items-center">
              <Link to={"/addcar"}>
                <Button variant="primary">
                  <img src={plus} />
                  Add New Car
                </Button>
              </Link>
            </div>
            <div className="body d-flex align-items-center justify-content-center">
              <CardDashboard />
            </div>
          </div>
          {/* MAIN_END */}
        </div>
      </section>
    </section>
  );
}

export default DashboardLayout;
