import axios from "axios";

const URL = "https://frontend-test-assignment-api.abz.agency/api/v1/";

export const getUsers = (page = 1) =>
  axios
    .get(`${URL}users?page=${page}&count=6`)
    .then((response) => response.data)
    .catch((error) => error.message);

export const getPositions = () =>
  axios
    .get(URL + "positions")
    .then((response) => response.data)
    .catch((error) => error.message);

export const getToken = () =>
  axios
    .get(URL + "token")
    .then((response) => response.data.token)
    .catch((error) => error.message);
