import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import car_img from "../../assets/img/listcar_car.png";
import i_users from "../../assets/img/fi_users.svg";
import i_settings from "../../assets/img/fi_settings.svg";
import i_calendar from "../../assets/img/fi_calendar.svg";

import "../../assets/css/components/cardLanding.css";

function cardLanding() {
  return (
    <section>
      <div className="cardLanding d-flex flex-column align-items-center">
        <div className="pict d-flex justify-content-center align-items-center overflow-hidden">
          <img src={car_img} />
        </div>
        <div className="detail d-flex flex-column justify-content-between">
          <p className="p1">Nama/Tipe Mobil</p>
          <p className="p2">Rp 430.000 / hari</p>
          <p className="p3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="list d-flex">
            <img src={i_users} /> <p className="p1">4 orang</p>
          </div>
          <div className="list d-flex">
            <img src={i_settings} /> <p className="p1">Manual</p>
          </div>
          <div className="list d-flex">
            <img src={i_calendar} /> <p className="p1">Tahun 2020</p>
          </div>
        </div>
        <div className="button d-flex justify-content-center align-items-center">
          <Link to={"/detail"}>
            <Button variant="success">Pilih Mobil</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default cardLanding;
