import axios from 'axios';

const backEndService = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});

backEndService.interceptors.request.use((config) => {
  console.log(config);
  return config;
}, (error) => Promise.reject(error));

export default backEndService;
