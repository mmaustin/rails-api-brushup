import axios from "axios";

export default axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": true
  },
});