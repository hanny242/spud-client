import axios from 'axios';

const API = axios.create({
  baseURL: `http://localhost:9000`
});

 const rawgAPI = axios.create({
  baseURL: `https://api.rawg.io/api/games`
});

export {
  API,
  rawgAPI
};