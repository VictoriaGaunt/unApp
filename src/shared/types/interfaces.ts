/**
 * Общие интерфейсы и типы, используемые в проекте.
 */
export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}