/**
 * Функции математических вычислений.
 */
export function roundTo(value: number, decimals: number): number {
    return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
}