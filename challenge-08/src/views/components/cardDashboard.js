import React, { useEffect, useState } from "react";
import ModalImage from "react-modal-image";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../api/reducers/carsReducer";

import img_car from "../../assets/img/listcar_car.png";
import edit from "../../assets/img/fi_edit.svg";
import trash from "../../assets/img/fi_trash-2.svg";
import key from "../../assets/img/fi_key.svg";
import clock from "../../assets/img/fi_clock.svg";

import "../../assets/css/components/cardDashboard.css";

function CardDashboard() {
  const linkimg = img_car;
  const urlToHugeImageFIle = img_car;

  const dispatch = useDispatch();
  const { cars, isLoading } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  console.log(cars);

  const listcar = cars.map((car) => {
    return car;
  });

  console.log(listcar);

  return (
    <section className="carddashboard">
      <div className="cardos overflow-scroll d-flex justify-content-center align-items-center flex-row">
        {/* LOADING START */}
        {isLoading && (
          <div className="spiner text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {/* LOADING END */}
        {listcar.length > 0 &&
          listcar.map((item) => {
            return (
              <div className="card">
                <div className="pict d-flex justify-content-center align-items-center">
                  <ModalImage
                    small={linkimg}
                    large={urlToHugeImageFIle}
                    alt="Detail Car"
                  />
                </div>
                <div className="detail d-flex flex-column justify-content-between">
                  <p className="p1">{item.name}</p>
                  <p className="p2">Rp {item.price} / hari</p>
                  <p className="p3">
                    <img src={key} /> Start rent - Finish rent
                  </p>
                  <p className="p3">
                    <img src={clock} /> Updated at 4 Apr 2022, 09.00
                  </p>
                </div>
                <div className="button d-flex justify-content-between align-items-center">
                  <Button variant="outline-danger">
                    <img src={trash} /> Delete
                  </Button>
                  <Button variant="success">
                    <img src={edit} /> Edit
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default CardDashboard;
