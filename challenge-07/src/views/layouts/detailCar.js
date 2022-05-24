import React from "react";
import ModalImage from "react-modal-image";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavigationBar from "../components/navbarLanding";
import FooterBar from "../components/footerLanding";
import CariMobil from "../components/cariMobil";

import img_car from "../../assets/img/listcar_car.png";
import i_users from "../../assets/img/fi_users.svg";
import i_settings from "../../assets/img/fi_settings.svg";
import i_calendar from "../../assets/img/fi_calendar.svg";

import "../../assets/css/layouts/detailCar.css";

function detailCar() {
  const linkimg = img_car;
  const urlToHugeImageFIle = img_car;

  return (
    <section>
      {/* NAVBAR START */}
      <NavigationBar />
      {/* NAVBAR END */}
      <div className="bgtop"></div>
      {/* CARI_MOBIL START */}
      <CariMobil />
      {/* CARI_MOBIL END */}
      {/* MAIN START */}
      <section className="detailcar">
        <div className="box d-flex justify-content-between">
          <div className="left"></div>
          <div className="right">
            <div className="pict d-flex align-items-center justify-content-center overflow-hidden">
              <ModalImage
                small={linkimg}
                large={urlToHugeImageFIle}
                alt="Detail Car"
              />
            </div>
            <div className="detail d-flex flex-column justify-content-between">
              <div>
                <p className="p2">Nama/Tipe Mobil</p>
                <div className="menu d-flex">
                  <div className="item d-flex align-items-center">
                    <img src={i_users} />
                    <p className="p1">4 orang</p>
                  </div>
                  <div className="item d-flex align-items-center">
                    <img src={i_settings} />
                    <p className="p1">Manual</p>
                  </div>
                  <div className="item d-flex align-items-center">
                    <img src={i_calendar} />
                    <p className="p1">Tahun 2020</p>
                  </div>
                </div>
              </div>
              <div className="total d-flex justify-content-between">
                <p>Total</p>
                <p className="p2">Rp 430.000</p>
              </div>
            </div>
            <div className="button">
              <Link to={"/detail"}>
                <Button variant="success">Lanjutkan Pembayaran</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* MAIN END */}
      {/* FOOTER START */}
      <FooterBar />
      {/* FOOTER END */}
    </section>
  );
}

export default detailCar;
