import axios from "axios";

const makeRequest = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
});

export default makeRequest;