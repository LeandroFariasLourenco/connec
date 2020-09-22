import axios from 'axios';

const backEndService = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});

export default backEndService;
