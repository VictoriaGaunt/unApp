import axios from 'axios';

const API_URL = 'https://api.example.com/dashboard';

export async function fetchDashboardData() {
    const response = await axios.get(API_URL);
    return response.data;
}
