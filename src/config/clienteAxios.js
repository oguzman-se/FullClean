import axios from "axios";

const clienteAxios = axios.create({
  //baseURL: "http://164.90.147.181:3301",
  baseURL: "http://66.97.43.198:3500",
  //baseURL: "http://comprafacil.com.bo:3500",
});

export default clienteAxios;