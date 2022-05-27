import axios from 'axios';
const baseUrl = 'https://rent-cars-api.herokuapp.com';

export const fetchAllCars = () => {
  return axios
    .get(`${baseUrl + '/admin/car'}`)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const fetchDetailCars = (id) => {
  return axios
    .get(`${baseUrl + `/admin/car/${id}`}`)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
