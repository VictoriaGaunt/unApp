import axios from 'axios';
import { Profile } from '../types/profileTypes';

const API_URL = 'https://api.example.com/profile';

export async function getProfile(): Promise<Profile> {
    const response = await axios.get(API_URL);
    return response.data;
}

export async function updateProfileApi(data: Partial<Profile>): Promise<Profile> {
    const response = await axios.put(API_URL, data);
    return response.data;
}
