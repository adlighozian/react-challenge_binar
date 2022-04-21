import { Axios } from "axios";
import React, { useEffect } from "react";
import "./App.css";

function App() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  const getImages = () => {
    Axios.get(url).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
