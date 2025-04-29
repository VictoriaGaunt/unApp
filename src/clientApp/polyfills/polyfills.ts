/**
 * Инициализация полифилов для поддержки устаревших браузеров.
 */
export function initPolyfills(): void {
    // Пример: если браузер не поддерживает Promise, подключаем полифил
    if (!window.Promise) {
        require('es6-promise').polyfill();
    }

    // Пример: если браузер не поддерживает fetch, подключаем полифил
    if (!window.fetch) {
        require('whatwg-fetch');
    }

    console.log('Polyfills initialized');
}
