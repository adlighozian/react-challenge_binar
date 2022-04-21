import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { BsPeople } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { FaRegCalendar } from "react-icons/fa";

import Navbar from "../components/Navbar";
import FormSearch from "../components/FormSearch";
import Footer from "../components/Footer";
import LayerJumb from "../components/LayerJumb";
import "../assets/css/Detail.css";

const Detail = () => {
  const { id } = useParams();

  let [item, setItem] = useState([]);

  const datas = async () => {
    let fetchs = await fetch(
      "https://rent-cars-api.herokuapp.com/customer/car/" + id
    );
    let datas = await fetchs.json();
    setItem((item = datas));
  };

  useEffect(() => {
    datas();
  }, []);

  return (
    <div>
      <Navbar />
      <LayerJumb />
      <FormSearch form="false" />
      <div className="mt-4">
        <div className="wrap-detail container">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body p-4">
                  <h5 className="title-detail fw-bold">Tentang Paket</h5>
                  <p>Include</p>

                  <ul className="text-detail">
                    <li>
                      Apa saja yang termasuk dalam paket misal durasi max 12 jam
                    </li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>

                  <p>Exlude:</p>
                  <ul className="text-detail">
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>

                  <div class="accordion" id="accordionDetail">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button title-detail fw-bold px-0 shadow-none"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Refund, Reschedule, Overtime
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionDetail"
                      >
                        <div class="accordion-body p-0">
                          <ul className="text-detail">
                            <li>
                              Tidak termasuk biaya makan sopir Rp 75.000/hari
                            </li>
                            <li>
                              {" "}
                              Jika overtime lebih dari 12 jam akan ada tambahan
                              biaya Rp 20.000/jam
                            </li>
                            <li> Tidak termasuk akomodasi penginapan</li>
                            <li>
                              {" "}
                              Tidak termasuk biaya makan sopir Rp 75.000/hari
                            </li>
                            <li>
                              Jika overtime lebih dari 12 jam akan ada tambahan
                              biaya Rp 20.000/jam
                            </li>
                            <li> Tidak termasuk akomodasi penginapan</li>
                            <li>
                              Tidak termasuk biaya makan sopir Rp 75.000/hari
                            </li>
                            <li>
                              Jika overtime lebih dari 12 jam akan ada tambahan
                              biaya Rp 20.000/jam
                            </li>
                            <li> Tidak termasuk akomodasi penginapan</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h5 className="title-detail fw-bold"> </h5>
                </div>
              </div>

              <div className="row flex-row-reverse mt-4 clearfix">
                <div className="col-md-4 float-right">
                  <Link
                    to="/#"
                    className="btn btn-card btn-bayar btn-success w-100"
                  >
                    Lanjutkan pembayaran
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body p-3">
                  <div>
                    <img src={item.image} alt="" className="w-100" />
                  </div>
                  <h5 className="title-detail fw-bold">
                    {item.name}/{item.category}
                  </h5>
                  <div className="mb-4 text-muted">
                    <small>
                      <BsPeople /> 4 orang
                    </small>
                    <small className="mx-2">
                      <FiSettings /> Manual
                    </small>
                    <small>
                      {" "}
                      <FaRegCalendar /> Tahun 2020
                    </small>
                  </div>

                  <div className="d-flex px-2 justify-content-between">
                    <div className="">Total</div>
                    <div
                      className="ms-auto fw-bold"
                      style={{ textAlign: "right" }}
                    >
                      Rp. {item.price}
                    </div>
                  </div>

                  <div className="container mt-2 px-0">
                    <Link to="/#" className="btn btn-bayar btn-success w-100">
                      Lanjutkan pembayaran
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
