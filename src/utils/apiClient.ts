import axios from 'axios';

const baseURL = 'https://www.alphavantage.co';
export default axios.create({
  baseURL,
});
