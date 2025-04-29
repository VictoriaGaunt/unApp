import axios from 'axios';
import { LoginPayload, RegistrationPayload } from '../types/authTypes';

const API_URL = 'https://api.example.com/auth';

export async function loginApi(payload: LoginPayload) {
    const response = await axios.post(`${API_URL}/login`, payload);
    return response.data;
}

export async function registerApi(payload: RegistrationPayload) {
    const response = await axios.post(`${API_URL}/register`, payload);
    return response.data;
}
