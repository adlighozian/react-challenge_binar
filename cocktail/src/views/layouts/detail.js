import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NavigationBar from "../components/navigationBar";
import Footer from "../components/footer";
import Menu from "../components/menu";

import "../../assets/css/head.css";

function Detail() {
  const { id } = useParams();
  console.log(id);

  const axios = require("axios");
  const [data, setIdata] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => {
          setIdata(res.data.drinks);
        });
    } catch (error) {
      alert(true);
    }
  });

  return (
    <section className="detail">
      <NavigationBar />

      {data.map((data) => {
        return (
          <div className="head">
            <div className="boxtop ">
              <div className="img overflow-hidden">
                <img src={data.strDrinkThumb} width="100%" alt="" />
              </div>
            </div>
          </div>
        );
      })}
      <div className="home">
        <Menu />
      </div>
      <Footer />
    </section>
  );
}

export default Detail;
