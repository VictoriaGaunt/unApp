import axios from 'axios';
import { IBalance } from '../models/Finance.types';

const API_BASE_URL = 'https://api.example.com/finance';

export async function getBalanceApi(userId: number): Promise<IBalance> {
    const response = await axios.get(`${API_BASE_URL}/balance/${userId}`);
    return response.data;
}

export async function updateBalanceApi(userId: number, amount: number): Promise<IBalance> {
    const response = await axios.put(`${API_BASE_URL}/balance/${userId}`, { amount });
    return response.data;
}
