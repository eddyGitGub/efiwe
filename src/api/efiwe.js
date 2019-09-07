/* eslint-disable semi */
import axios from 'axios';

// const CORS = 'https://cors-anywhere.herokuapp.com/';
// eslint-disable-next-line semi
const PRIVATE_URL = 'http://18.191.156.12/api/'; //  // 'efiwe.org/backend/api/';
// const PRIVATE_URL = 'http://localhost:3000/api/';

const efiweApi = axios.create({
  baseURL: PRIVATE_URL,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})
var token = window.localStorage.getItem('loginToken')
if (!token) {
  efiweApi.defaults.headers.common['x-auth-token'] = window.localStorage.getItem('loginToken')
}
// window.axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('loginToken');
export default efiweApi;
