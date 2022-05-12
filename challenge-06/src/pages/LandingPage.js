import React from "react";
import { Container, Row, Col } from "reactstrap";

import NavigationBar from "../components/Navbar";
import car from "../assets/img/img_car.png";
import "../assets/css/LandingPage.css";

function Login() {
  return (
    <>
      <NavigationBar />
      <div className="jumbotron">
        <Container>
          <Row>
            <Col className="jumb-left my-auto" md="6">
              <div className="wrap-title">
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <div className="text">
                  <p>
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil
                    kualitas terbaik dengan harga terjangkau. Selalu siap
                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="jumb-right my-auto" md="6">
              <div className="wrap-img">
                <img src={car} alt="car" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Login;
