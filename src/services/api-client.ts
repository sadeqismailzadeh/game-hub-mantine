import axios from "axios";

// Get a free key at https://rawg.io/apidocs and put it in a .env.local file
// as VITE_RAWG_API_KEY=your_key_here
const apiClient = axios.create({
  baseURL: "https://www.freetogame.com/api",
  // params: {
  //   key: import.meta.env.VITE_RAWG_API_KEY,
  // },
});

export default apiClient;
