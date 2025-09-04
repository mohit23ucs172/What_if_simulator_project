// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`, // ✅ dynamic from .env
  withCredentials: true, // allow cookies/sessions
});

export default api;
