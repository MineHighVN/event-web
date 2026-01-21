import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.overlix.net",
});

export default apiClient;
