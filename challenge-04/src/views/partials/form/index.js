import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
import { React, Button, Input } from "reactstrap";

function Form() {
  return (
    <>
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
            <Button href="/cari" color="success">
              Cari mobil
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
