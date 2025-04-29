/**
 * appConfig.ts
 * Глобальные настройки приложения.
 */
export default {
    appName: 'My Awesome App',
    version: '1.0.0',
    apiUrl: 'https://questbet.win:2053/api',
    sessionTimeout: 900000, // 15 минут в миллисекундах
    environment: process.env.NODE_ENV || 'development',
};
