import React from "react";
import { Container, Row, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { BsPeople } from "react-icons/bs";

import "../assets/css/FormSearch.css";

const FormSearch = (props) => {
  return (
    <div>
      <Container className="wrap-search p-4">
        <Form method="post">
          <h6 className="fw-bold px-4">{!props.cari ? "Pencarianmu" : ""}</h6>
          <Row>
            <Col md={props.show ? "10" : "12"}>
              <Row className="form-search">
                <Col className="tipe-driver" md="3">
                  <FormGroup>
                    <Label for="tipeDriver">Tipe Driver</Label>
                    <Input
                      id="tipeDriver"
                      name="tipe-driver"
                      type="select"
                      placeholder="Pilih Tipe Driver"
                      disabled={props.form}
                    >
                      <option>Pilih Tipe Driver</option>
                      <option>Dengan Sopir</option>
                      <option>Tanpa Sopir (Lepas Kunci)</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col className="tanggal" md="3">
                  <FormGroup>
                    <Label for="Tanggal">Tanggal</Label>
                    <Input
                      id="Tanggal"
                      name="tanggal"
                      placeholder="Pilih Tanggal"
                      type="date"
                      disabled={props.form}
                    />
                  </FormGroup>
                </Col>
                <Col className="waktu-jemput" md="3">
                  <FormGroup>
                    <Label for="waktuJemput">Time</Label>
                    <Input
                      id="waktuJemput"
                      name="waktu-jemput"
                      type="select"
                      placeholder="Pilih Waktu"
                      disabled={props.form}
                    >
                      <option className="d-flex">
                        {" "}
                        <span className="">08.00</span>{" "}
                        <span className="ms-auto">WIB</span>{" "}
                      </option>
                      <option>09.00 WIB</option>
                      <option>10.00 WIB</option>
                      <option>11.00 WIB</option>
                      <option>12.00 WIB</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col className="jumlah-penumpang" md="3">
                  <FormGroup>
                    <Label for="jumlahPenumpang">
                      Jumlah Penumpang (optional)
                    </Label>
                    <div className="d-flex input-jp">
                      <Input
                        id="jumlahPenumpang"
                        name="jumlah-penumpang"
                        placeholder="Jumlah Penumpang"
                        type="number"
                        disabled={props.form}
                      />
                      <BsPeople />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
            <Col
              className={props.show ? "my-auto d-flex" : "d-none"}
              md={props.show ? "2" : ""}
            >
              <Link
                to="/cari"
                className={`btn  mx-auto ${
                  props.edit
                    ? "btn btn-outline-primary"
                    : "btn-search btn-success"
                }`}
              >
                {!props.cari ? "Edit" : "Cari mobil"}
              </Link>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default FormSearch;
