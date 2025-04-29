import axios from 'axios';
import { IOrder } from '../models/Order.types';

const API_BASE_URL = 'https://api.example.com/orders';

export async function getOrder(id: number): Promise<IOrder> {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
}

export async function createOrderApi(order: IOrder): Promise<IOrder> {
    const response = await axios.post(API_BASE_URL, order);
    return response.data;
}

export async function updateOrderApi(id: number, order: Partial<IOrder>): Promise<IOrder> {
    const response = await axios.put(`${API_BASE_URL}/${id}`, order);
    return response.data;
}

export async function deleteOrderApi(id: number): Promise<void> {
    await axios.delete(`${API_BASE_URL}/${id}`);
}
