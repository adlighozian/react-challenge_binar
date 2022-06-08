import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function App() {
  const axios = require("axios");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    try {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c")
        .then((res) => {
          setImages(res.data.drinks);
          setLoading(false);
        });
    } catch (error) {
      setError(true);
    }
    
  });
  return (
    <div className="App">
      {images.map((image) => {
        return (
          <LazyLoadImage
            src={image.strDrinkThumb}
            height="400px"
            width="500px"
          />
        );
      })}
    </div>
  );
}

export default App;
