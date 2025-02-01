import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2";

const API = axios.create({
  baseURL,
});

export default API;
