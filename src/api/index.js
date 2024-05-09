// api/index.js
import axios from 'axios';

// Configuración de axios
const instance = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 5000, // Tiempo de espera de 5 segundos
});

export default instance;