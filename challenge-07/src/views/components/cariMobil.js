import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Form,
  Nav,
  NavDropdown,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import logo from "../../assets/img/logo.svg";

import "../../assets/css/components/cariMobil.css";

function CariMobil() {
  return (
    <section className="cari d-flex justify-content-center position-absolute">
      <div className="box d-flex">
        <div className="item">
          <p>Tipe Driver</p>
          <Form.Control type="text" placeholder="contoh" aria-label="contoh" />
        </div>
        <div className="item">
          <p>Tipe Driver</p>
          <Form.Control type="text" placeholder="contoh" aria-label="contoh" />
        </div>
        <div className="item">
          <p>Tipe Driver</p>
          <Form.Control type="text" placeholder="contoh" aria-label="contoh" />
        </div>
        <div className="item">
          <p>Tipe Driver</p>
          <Form.Control type="text" placeholder="contoh" aria-label="contoh" />
        </div>
        <div className="item d-flex justify-content-center align-items-center flex-column">
          <p></p>
          <Link to={"/listcar"}>
            <button type="button" class="btn btn-success">
              Cari Mobil
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CariMobil;
