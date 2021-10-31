import axios from 'axios';

// base axios instance
export default axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`
});
