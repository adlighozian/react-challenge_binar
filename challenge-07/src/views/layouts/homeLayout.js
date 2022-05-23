import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import car from "../../assets/img/landing_car.png";
import service from "../../assets/img/img_service.png";
import ceklis from "../../assets/img/ceklis_service.svg";
import icon_1 from "../../assets/img/icon_complete.svg";
import icon_2 from "../../assets/img/icon_price.svg";
import icon_3 from "../../assets/img/icon_24hrs.svg";
import icon_4 from "../../assets/img/icon_professional.svg";

import "../../assets/css/layouts/home.css";

function Home() {
  const labels = ["january", "february", "march", "april", "may", "june"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My first dataset",
        backgroundColor: "#ff9200",
        borderColor: "#fffff",
        data: [0, 2, 1, 4, 3, 5],
      },
    ],
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Binar Rent",
      },
    },
  };

  return (
    <section>
      {/* HOME_START */}
      <section className="home d-flex align-items-center overflow-hidden">
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
          <button type="button" class="btn btn-success">
            Mulai Sewa Mobil
          </button>
        </div>
        {/* LEFTSIDE_END */}
        {/* RIGHTSIDE_START */}
        <div className="right d-flex flex-column justify-content-end align-items-center">
          <img className="position-absolute" src={car} />
          <div className="bg position-absolute" />
        </div>
        {/* RIGHTSIDE_END */}
      </section>
      {/* HOME_END */}
      {/* SERVICE_START */}
      <section className="service d-flex">
        {/* LEFTSIDE_START */}
        <div className="left d-flex align-items-center justify-content-center">
          <img src={service} />
        </div>
        {/* LEFTSIDE_END */}
        {/* RIGHTSIDE_START */}
        <div className="right d-flex align-items-center justify-content-center">
          <div className="box d-flex flex-column justify-content-between">
            <p className="p1">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </p>
            <p className="p2">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="list d-flex">
              <img src={ceklis} /> <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
            </div>
            <div className="list d-flex">
              <img src={ceklis} /> <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
            </div>
            <div className="list d-flex">
              <img src={ceklis} /> <p>Sewa Mobil Jangka Panjang Bulanan</p>
            </div>
            <div className="list d-flex">
              <img src={ceklis} /> <p>Gratis Antar - Jemput Mobil di Bandara</p>
            </div>
            <div className="list d-flex">
              <img src={ceklis} /> <p>Layanan Airport Transfer / Drop In Out</p>
            </div>
          </div>
        </div>
        {/* RIGHTSIDE_END */}
      </section>
      {/* SERVICE_END */}
      {/* WHYUS_START */}
      <section className="whyus d-flex flex-column justify-content-center">
        <p className="p1">Why Us?</p>
        <p className="p2">Mengapa harus pilih Binar Car Rental?</p>
        <div className="listitem d-flex align-items-center justify-content-between">
          {/* LIST_START */}
          <div className="item">
            <img src={icon_1} />
            <p className="p1">Mobil Lengkap</p>
            <p className="p2">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
          <div className="item">
            <img src={icon_2} />
            <p className="p1">Harga Murah</p>
            <p className="p2">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
          <div className="item">
            <img src={icon_3} />
            <p className="p1">Layanan 24 Jam</p>
            <p className="p2">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
          <div className="item">
            <img src={icon_4} />
            <p className="p1">Sopir Profesional</p>
            <p className="p2">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
          {/* LIST_END */}
        </div>
      </section>
      {/* WHYUS_END */}
      {/* CHART_START */}
      <section className="chart d-flex justify-content-center">
        <div className="data">
          <Line options={options} data={data} />
        </div>
      </section>
      {/* CHART_END */}
    </section>
  );
}

export default Home;
