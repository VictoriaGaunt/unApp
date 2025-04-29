import axios from 'axios';
import { Product } from '../types/productTypes';

const API_URL = 'https://api.example.com/products';

export async function fetchProducts(): Promise<Product[]> {
    const response = await axios.get(API_URL);
    return response.data;
}
