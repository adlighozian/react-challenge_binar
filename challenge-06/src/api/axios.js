import axios from "axios";

const baseUrl = "https://awesome-movie-data.herokuapp.com/api/v1";

export const login = (payload) => {
  return axios
    .post(`${baseUrl}/auth`, payload)
    .then((result) => {
      return result.data.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const register = (payload) => {
  return axios
    .post(`${baseUrl}/users`, payload)
    .then((result) => {
      return result.data.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const editProfile = (payload) => {
  return axios
    .put(`${baseUrl}/users`, payload, {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((result) => {
      return result.data.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

//
