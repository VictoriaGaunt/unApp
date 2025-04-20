/**
 * Интерфейс конфигурации приложения
 */
export interface AppConfig {
    appName: string;
    version: string;
}

/**
 * Пропсы корневого компонента App
 */
export interface AppProps {
    config: AppConfig;
}
