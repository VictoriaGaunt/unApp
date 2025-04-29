import { App } from 'vue';

export default {
    install(app: App, options?: Record<string, any>) {
        // Пример: логирование событий аналитики
        app.config.globalProperties.$analytics = {
            trackEvent(event: string, data?: Record<string, any>) {
                console.log(`Analytics event: ${event}`, data);
                // Здесь можно интегрировать реальную аналитику, например, gtag() или ym()
            },
        };
    },
};