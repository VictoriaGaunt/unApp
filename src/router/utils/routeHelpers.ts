/**
 * Генерирует путь с параметрами запроса.
 * @param baseUrl Базовый URL
 * @param params Объект с параметрами запроса
 * @returns URL с query-параметрами
 */
export function generateUrlWithQuery(baseUrl: string, params: Record<string, any>): string {
    const query = new URLSearchParams(params).toString();
    return `${baseUrl}?${query}`;
}

/**
 * Функция для получения заголовка страницы из meta маршрута.
 * @param meta Объект meta маршрута
 * @returns Заголовок или пустую строку, если не задан
 */
export function getPageTitle(meta: { title?: string }): string {
    return meta.title || '';
}
