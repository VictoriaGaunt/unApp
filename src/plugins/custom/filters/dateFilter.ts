export function dateFilter(value: Date | string, locale: string = 'en-US'): string {
    const date = typeof value === 'string' ? new Date(value) : value;
    return date.toLocaleDateString(locale);
}