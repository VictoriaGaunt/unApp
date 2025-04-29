/**
 * Форматирует дату в строку вида DD.MM.YYYY
 * @param date Объект Date
 * @returns Отформатированная строка даты
 */
export function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // месяцы начинаются с 0
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

/**
 * Генерирует случайный 6-значный код, используемый как код авторизации
 * @returns Строка, содержащая 6-значный код
 */
export function generateAuthCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
