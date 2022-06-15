import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../assets/css/menu.css";

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
  const axios = require("axios");
  const [data, setIdata] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c")
        .then((res) => {
          setIdata(res.data.drinks);
        });
    } catch (error) {}
  });

  return (
    <>
      <section className="menu">
        <div className="search d-flex justify-content-center align-items-center">
          <div className="i d-flex align-items-center">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="line d-flex align-items-center">
          <div className="line1"></div>
          <p>MENU</p>
          <div className="line1"></div>
        </div>
        <div className="boxss">
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) => {
              return (
                <section className="card">
                  <div className="img overflow-hidden d-flex align-items-center justify-content-center">
                    <img src={val.strDrinkThumb} alt="img" />
                  </div>
                  <div className="ket">
                    <p className="p1">{val.strDrink}</p>
                    <p className="p2">
                      Category :<span> {val.strCategory}</span>
                    </p>
                    <p className="p2">{val.strIBA}</p>
                  </div>
                  <div className="button">
                    <Link to={`/detail/${val.idDrink}`}>
                      <button>Detail</button>
                    </Link>
                  </div>
                </section>
              );
            })}
        </div>
      </section>
    </>
  );
}

export default Menu;
