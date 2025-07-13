import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchDestinations = () => axios.get(`${API_URL}/destination`);
