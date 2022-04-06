import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import car from "../../../assets/img/img_car.png";
import { React, Button, Input } from "reactstrap";

function Home() {
  return (
    <>
      <div className="belakang" fixed="top"></div>
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
      <div className="box2">
        <div className="form">
          <div className="form1">
            <span>Tipe Driver </span>
            <Input id="exampleSelect" name="select" type="select">
              <option hidden>Pilih Tipe Driver</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </div>
          <div className="form2">
            <span>Tanggal</span>
            <Input
              id="exampleDate"
              name="date"
              placeholder="date placeholder"
              type="date"
            />
          </div>
          <div className="form3">
            <span>Waktu jemput/Ambil</span>
            <Input
              id="exampleTime"
              name="time"
              placeholder="time placeholder"
              type="time"
            />
          </div>
          <div className="form4">
            <span>Jumlah Penumpang</span>
            <Input
              id="exampleText"
              name="text"
              placeholder="Jumlah penumpang"
              type="input"
            />
          </div>
          <div className="form5">
            <span>.</span>
            <Button color="success">Cari mobil</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
