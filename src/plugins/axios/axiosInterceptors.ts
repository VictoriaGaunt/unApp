import axiosConfig from './axiosConfig';
import { useAuthStore } from '@/entities/user/stores/authStore';

// Запрос: добавление токена авторизации, если он есть
axiosConfig.interceptors.request.use(
    (config) => {
        const authStore = useAuthStore();
        if (authStore.token) {
            config.headers['Authorization'] = `Bearer ${authStore.token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Ответ: обработка ошибок, логирование и т.д.
axiosConfig.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Axios Error:', error);
        return Promise.reject(error);
    }
);

export default axiosConfig;