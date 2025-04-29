// pages/utils/pageHelpers.ts

/**
 * Функция для форматирования строки в заголовок страницы.
 * Например, приводит строку к верхнему регистру первой буквы.
 */
export function formatPageTitle(title: string): string {
    if (!title) return '';
    return title.charAt(0).toUpperCase() + title.slice(1);
}
