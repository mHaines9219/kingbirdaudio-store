import axios from 'axios';

export default axios.create({
  baseURL: '/api/products',
  headers: {
    'Accept': 'application/.json',
    'Content-Type': 'application/.json',
  },
});
