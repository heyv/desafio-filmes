import axios from 'axios';

const apiList = axios.create({
  baseURL: 'https://pertobilingueadm.com.br/server/testes/filmes/',
});

export default apiList;
