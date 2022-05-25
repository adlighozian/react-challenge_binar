import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Worker, Viewer } from "@react-pdf-viewer/core";

import NavigationBar from "../components/navbarLanding";
import FooterBar from "../components/footerLanding";

import arrow from "../../assets/img/fi_arrow-left.svg";
import ceklis from "../../assets/img/ceklis_biru.svg";
import success from "../../assets/img/success.svg";
import download from "../../assets/img/fi_download.svg";
import pdf from "../../assets/pdf/pdf-test.pdf";

import "../../assets/css/layouts/tiket.css";
import "@react-pdf-viewer/core/lib/styles/index.css";

function Tiket() {
  return (
    <section>
      {/* NAVBAR START */}
      <NavigationBar />
      {/* NAVBAR END */}
      {/* MAIN START */}
      <section className="tiket">
        {/* TOP START */}
        <div className="top d-flex align-items-center justify-content-between">
          <div className="left d-flex">
            <div className="arrow">
              <Link to={"/detail"}>
                <img src={arrow} />
              </Link>
            </div>
            <div className="detail">
              <p className="p1">Tiket</p>
              <p className="p2">Order ID: xxxxxxxx</p>
            </div>
          </div>
          <div className="right d-flex align-items-center justify-content-end">
            <img src={ceklis}></img>
            <p>Pilih Metode</p>
            <div className="garis"></div>
            <img src={ceklis}></img>
            <p>Bayar</p>
            <div className="garis"></div>
            <img src={ceklis}></img>
            <p>TIket</p>
          </div>
        </div>
        {/* TOP END */}
        {/* BODY START */}
        <div className="body d-flex flex-column justify-content-between align-items-center">
          <img src={success}></img>
          <p className="p1">Pembayaran Berhasil!</p>
          <p className="p2">
            Tunjukkan invoice ini ke petugas BCR di titik temu.
          </p>
          <div className="invoice">
            <div className="atas d-flex justify-content-between align-items-center">
              <div className="left d-flex align-items-center">
                <div className="text_1">
                  <p className="p1">Invoice</p>
                  <p>*no invoice</p>
                </div>
              </div>
              <div className="right d-flex justify-content-end align-items-center">
                <Button variant="outline-primary">
                  <img src={download} /> Primary
                </Button>
              </div>
            </div>
            <div className="pdf">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                <Viewer fileUrl={pdf} />;
              </Worker>
            </div>
          </div>
        </div>
        {/* BODY END */}
      </section>
      {/* MAIN END */}
      {/* FOOTER START */}
      <FooterBar />
      {/* FOOTER END */}
    </section>
  );
}

export default Tiket;
