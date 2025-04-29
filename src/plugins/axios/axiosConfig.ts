import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'https://api.example.com', // Измените на реальный URL
    timeout: 10000, // Таймаут 10 секунд
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosConfig;