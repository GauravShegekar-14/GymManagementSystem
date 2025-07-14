// src/services/authService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Update as per your backend

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};
