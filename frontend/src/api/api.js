// src/api/api.js

import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

export const registerUser  = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}register/`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data; // Manejo de errores
    }
};

export const loginUser  = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}token/`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data; // Manejo de errores
    }
};

export const getUsers = async () => {
    const response = await axios.get(`${API_URL}users/`); // Asegúrate de tener este endpoint en tu backend
    return response.data;
};

export const getMessages = async (username) => {
    const response = await axios.get(`${API_URL}messages/?user=${username}`); // Asegúrate de tener este endpoint en tu backend
    return response.data;
};

export const sendMessage = async (username, message) => {
    await axios.post(`${API_URL}messages/`, { username, content: message }); // Asegúrate de tener este endpoint en tu backend
};