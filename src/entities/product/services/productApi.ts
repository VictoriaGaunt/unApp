import axios from 'axios';
import { IProduct } from '../models/Product.types';

const API_BASE_URL = 'https://api.example.com/products'; // Измените URL на реальный

export async function getProduct(id: number): Promise<IProduct> {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
}

export async function createProductApi(product: IProduct): Promise<IProduct> {
    const response = await axios.post(API_BASE_URL, product);
    return response.data;
}

export async function updateProductApi(id: number, product: Partial<IProduct>): Promise<IProduct> {
    const response = await axios.put(`${API_BASE_URL}/${id}`, product);
    return response.data;
}

export async function deleteProductApi(id: number): Promise<void> {
    await axios.delete(`${API_BASE_URL}/${id}`);
}
