/* eslint-disable semi */
import axios from 'axios';

// const CORS = 'https://cors-anywhere.herokuapp.com/';
// eslint-disable-next-line semi
const PRIVATE_URL = 'http://efiwe.org:3100/api/'; // 'http://localhost:3100/api/'; // 'efiwe.org/backend/api/';
// const PRIVATE_URL = 'http://d0a172b0.ngrok.io/api/';

const efiweApi = axios.create({
  baseURL: PRIVATE_URL,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})
// window.axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('loginToken');
export default efiweApi;
