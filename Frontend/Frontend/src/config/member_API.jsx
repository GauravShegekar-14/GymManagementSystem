import axios from "axios";

const Auth_API = axios.create({
  baseURL: "http://localhost:5000/member", // or your actual backend URL
 
});

// Add token to headers automatically if stored
Auth_API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export  {Auth_API};