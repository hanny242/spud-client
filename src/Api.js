import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API}`
});

 const rawgAPI = axios.create({
  baseURL: `https://api.rawg.io/api/games`
});

export {
  API,
  rawgAPI
};