import axios from "axios";
const urlAll = "https://restcountries.com/v3.1/all";
const urlByCodes = "https://restcountries.com/v3.1/alpha?codes=ned,deu";

export default axios.create({
  baseURL: "https://restcountries.com/v3.1",
});
