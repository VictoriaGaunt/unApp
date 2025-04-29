import axios from 'axios';
import { IUser } from '../models/User.types';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    timeout: 10000,
    withCredentials: true,
});
export async function getUser(id: number): Promise<IUser> {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
}

export async function createUserApi(user: IUser): Promise<IUser> {
    const response = await axios.post(API_BASE_URL, user);
    return response.data;
}

export async function updateUserApi(id: number, user: Partial<IUser>): Promise<IUser> {
    const response = await axios.put(`${API_BASE_URL}/${id}`, user);
    return response.data;
}

export async function deleteUserApi(id: number): Promise<void> {
    await axios.delete(`${API_BASE_URL}/${id}`);
}
export default api;
