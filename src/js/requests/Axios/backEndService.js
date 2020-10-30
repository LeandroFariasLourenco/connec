import axios from 'axios';

const backEndService = axios.create({
  baseURL: 'https://connec-api.herokuapp.com/'
});

backEndService.interceptors.response.use((res) => {
  return res;
}, (error) => {
  if (error.message === 'Request failed with status code 403' && window.location.pathname !== '/') {
    alert('Sua sessão foi expirada...');
    // sessionStorage.removeItem('accesstoken');
    // window.location.reload();
  }
  return Promise.reject(error);
});

backEndService.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default backEndService;
