import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import { API_TIMEOUT, AUTH_API_URL } from '@/app/utils/constants';

/**
 * Создание экземпляра axios с настройками по умолчанию
 */
const apiClient: AxiosInstance = axios.create({
    baseURL: AUTH_API_URL, // Базовый URL для аутентификации
    timeout: API_TIMEOUT,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    // Преобразуем данные для form-urlencoded запросов
    transformRequest: [(data) => qs.stringify(data)],
});

/**
 * Универсальная функция для GET-запросов
 * @param url URL запроса (относительно baseURL)
 * @param config Дополнительная конфигурация запроса
 */
export async function getRequest<T = any>(
    url: string,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
    return apiClient.get<T>(url, config);
}

/**
 * Универсальная функция для POST-запросов
 * @param url URL запроса (относительно baseURL)
 * @param data Данные для отправки
 * @param config Дополнительная конфигурация запроса
 */
export async function postRequest<T = any>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
    return apiClient.post<T>(url, data, config);
}

export default apiClient;
