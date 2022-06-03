import axios from "axios";
const baseUrl = "https://www.thecocktaildb.com";

export const fetchAllCars = () => {
  return axios
    .get(`${baseUrl + "/api/json/v1/1/search.php?f=a"}`)
    .then((result) => {
      return result.data.drinks;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
