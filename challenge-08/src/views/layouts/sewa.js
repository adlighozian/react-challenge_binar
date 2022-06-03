import React from "react";
import { Link } from "react-router-dom";

import NavigationBar from "../components/navbarLanding";
import FooterBar from "../components/footerLanding";
import CariMobil from "../components/cariMobil";
import car from "../../assets/img/landing_car.png";

import "../../assets/css/layouts/sewa.css";

function sewa() {
  return (
    <section>
      {/* NAVBAR START */}
      <NavigationBar />
      {/* NAVBAR END */}
      {/* MAIN START */}
      <section className="sewa d-flex align-items-center overflow-hidden">
        {/* LEFTSIDE_START */}
        <div className="left d-flex justify-content-around flex-column">
          <p className="p1">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </p>
          <p className="p2">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
        </div>
        {/* LEFTSIDE_END */}
        {/* RIGHTSIDE_START */}
        <div className="right d-flex flex-column justify-content-end align-items-center">
          <img className="position-absolute" src={car} />
          <div className="bg position-absolute" />
        </div>
        {/* RIGHTSIDE_END */}
      </section>
      {/* MAIN END */}
      {/* CARI_MOBIL START */}
      <CariMobil />
      {/* CARI_MOBIL END */}
      <div className="line"></div>
      {/* FOOTER START */}
      <FooterBar />
      {/* FOOTER END */}
    </section>
  );
}

export default sewa;
