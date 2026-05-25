import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (username, password) => {
  return await axios.post(`${API_URL}/auth/register`, { username, password });
};

export const loginUser = async (username, password) => {
  return await axios.post(`${API_URL}/auth/login`, { username, password });
};

export const getChannelMessages = async (channel) => {
  return await axios.get(`${API_URL}/messages/${channel}`);
};