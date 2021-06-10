import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://shoppingwaali-default-rtdb.firebaseio.com/'
});

export default instance;
