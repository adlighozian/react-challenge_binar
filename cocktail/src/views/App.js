import logo from "./logo.svg";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../api/reducers/carsReducer";
import { getCocktail } from "../api/reducers/cocktailReducer";

import "./App.css";

function App() {
  // CARS START

  const dispatch = useDispatch();
  const { cars, isLoading } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const listcar = cars.map((car) => {
    return car;
  });

  console.log(listcar);

  // CARS END

  // COCKTAIL START

  // const { cocktail, Loading } = useSelector((state) => state.cocktail);

  // useEffect(() => {
  //   dispatch(getCocktail());
  // }, [dispatch]);

  // const drinks = cocktail.map((drinks) => {
  //   return drinks;
  // });

  // console.log(drinks);

  //  COCKTAIL END

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div className="api">
          {/* {isLoading && (
            <div className="spiner text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {listcar.length > 0 &&
            listcar.map((item) => {
              return <div className="card">{item.name}</div>;
            })} */}
        </div>
      </header>
    </div>
  );
}

export default App;
