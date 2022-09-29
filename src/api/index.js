import axios from "axios";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

export const getUsers = (page = 1) =>
  axios
    .get(`/users?page=${page}&count=6`)
    .then((response) => response.data)
    .catch((error) => error.message);

export const getPositions = () =>
  axios
    .get("/positions")
    .then((response) => response.data)
    .catch((error) => error.message);

export const getToken = () =>
  axios
    .get("/token")
    .then((response) => response.data.token)
    .catch((error) => error.message);

export const postData = (data, token) =>
  axios
    .post("/users", data, { headers: { Token: token } })
    .then((response) => response.data)
    .catch((error) => error.response.data);
