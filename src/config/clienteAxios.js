import axios from "axios";

const clienteAxios = axios.create({
  //baseURL: "http://localhost:3500/",
    baseURL: "http://200.58.127.196:3500/"
});

export default clienteAxios;
