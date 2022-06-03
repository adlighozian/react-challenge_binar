import React, { useEffect, useState } from "react";

import NavigationBar from "../components/navbarLanding";
import FooterBar from "../components/footerLanding";
import CariMobil from "../components/cariMobil";
import CardLanding from "../components/cardLanding";

import "../../assets/css/layouts/listcar.css";

function ListCar() {
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
      <section className="listcar">
        <div className="box d-flex align-items-center justify-content-between">
          {/* CARD START */}
          <CardLanding />
          <CardLanding />
          <CardLanding />
          {/* CARD END */}
        </div>
      </section>
      {/* MAIN END */}
      {/* FOOTER START */}
      <FooterBar />
      {/* FOOTER END */}
    </section>
  );
}

export default ListCar;
