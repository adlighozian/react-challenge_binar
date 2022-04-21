import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import car from "../../../assets/img/img_car.png";
import Form from "../../partials/form";
import { React } from "reactstrap";

function Home() {
  
  return (
    <>
      <div className="belakang" fixed="top"></div>
      {/* BOX START */}
      <div className="box">
        <div className="boxl">
          <span className="txt1">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </span>
          <span className="txt2">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </span>
        </div>
        <div className="boxr">
          <img src={car} className="car_icon" alt="binar" />
        </div>
      </div>
      <Form />
      {/* BOX END */}
    </>
  );
}

export default Home;
