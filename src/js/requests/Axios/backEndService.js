import axios from 'axios';

const backEndService = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});

backEndService.interceptors.response.use((res) => {
  console.log(res);
  return res;
}, (error) => {
  if (error.message === 'Request failed with status code 403') {
    console.log(error.toJSON());
  }
  return Promise.reject(error);
});

export default backEndService;
