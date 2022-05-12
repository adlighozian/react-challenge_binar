import React from "react";
import { Link } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { FaRegCalendar } from "react-icons/fa";

import "../assets/css/Card.css";

const Card = (props) => {
  return (
    <div>
      <div key="{e.no}" className="card my-3">
        <div className="wrap-img-card p-4">
          <div className="layer-img-card d-flex">
            <img src={props.image} className="card-img-top my-auto" alt="..." />
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">
            {props.name}/{props.category}
          </p>
          <h5 className="card-title fw-bold mb-3">
            Rp. {props.price.toLocaleString("en-US")} / hari
          </h5>
          <p className="text-muted mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facilis
            deleniti molestiae beatae neque ea atque, qui expedita molestias
            quasi?
          </p>

          <p className="card-text text-muted mb-1 fw-light">
            <BsPeople /> 4 orang
          </p>
          <p className="card-text text-muted my-2 fw-light">
            <FiSettings /> Manual
          </p>
          <p className="card-text text-muted fw-light">
            <FaRegCalendar /> Tahun 2020
          </p>

          <div className="row mt-4 px-3">
            <Link
              to={`detail/${props.id}`}
              className="btn btn-pilih btn-success w-100"
            >
              Pilih mobil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
