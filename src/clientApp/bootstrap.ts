/**
 * Файл первичной инициализации приложения.
 * Инициализация полифилов, глобальные слушатели событий, другие начальные настройки.
 */
import { initPolyfills } from './polyfills/polyfills';
import { setGlobalListeners } from './utils/logger';

export default function bootstrap(): void {
     initPolyfills();
     setGlobalListeners();
    console.log('Bootstrap: Приложение инициализировано');
}