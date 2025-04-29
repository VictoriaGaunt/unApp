import { API_BASE_URL } from '@/shared/utils/constants';

/**
 * Универсальный сервис для API-запросов.
 */
export async function apiGet(endpoint: string): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    return response.json();
}

export async function apiPost(endpoint: string, data: any): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
}