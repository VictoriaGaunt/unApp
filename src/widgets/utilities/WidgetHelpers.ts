/**
 * Общие вспомогательные функции, которые могут использоваться разными виджетами.
 */

/**
 * Преобразует число в более читабельный формат (1.2K, 3.4M).
 * @param value Число для форматирования
 * @returns Строка формата "X.YK" или "X.YM"
 */
export function formatNumberShort(value: number): string {
    if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(1) + 'M';
    } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + 'K';
    }
    return String(value);
}
