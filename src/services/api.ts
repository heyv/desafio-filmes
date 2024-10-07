import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pertobilingueadm.com.br/server/testes/login',
});

export default api;
