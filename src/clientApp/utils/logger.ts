/**
 * logger.ts
 * Модуль для логирования с различными уровнями (info, warn, error).
 */

export function logInfo(message: string, ...params: any[]): void {
    console.info(`[INFO]: ${message}`, ...params);
}

export function logWarn(message: string, ...params: any[]): void {
    console.warn(`[WARN]: ${message}`, ...params);
}

export function logError(message: string, ...params: any[]): void {
    console.error(`[ERROR]: ${message}`, ...params);
}

/**
 * Устанавливает глобальные слушатели для ошибок и необработанных отклонений.
 */
export function setGlobalListeners(): void {
    window.addEventListener('error', (event) => {
        logError('Global error captured:', event.error);
    });
    window.addEventListener('unhandledrejection', (event) => {
        logError('Unhandled rejection:', event.reason);
    });
}