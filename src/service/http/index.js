import axios from 'axios';

const baseUrl = 'https://sample-api-78c77.firebaseio.com/';
const config = {
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
}
const HTTP = axios.create(config)

export default HTTP;