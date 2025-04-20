/**
 * Глобальный обработчик ошибок для приложения.
 */
import { App } from 'vue';

export function setGlobalErrorHandler(app: App): void {
    app.config.errorHandler = (err, vm, info) => {
        console.error('Global errorHandler:', err, info);
        //добавить отправку отчётов об ошибках на сервер или уведомление пользователя.
    };
}