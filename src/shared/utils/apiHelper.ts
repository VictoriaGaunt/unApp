/**
 * Обёртка для работы с API: обработка ошибок, форматирование запросов.
 */
export async function fetchData(url: string, options?: RequestInit): Promise<any> {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Ошибка API: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('API Helper Error:', error);
        throw error;
    }
}