import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://assets-visualization.firebaseio.com/'
});

export default instance;
