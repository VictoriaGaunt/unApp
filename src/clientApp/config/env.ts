/**
 * env.ts
 * Определение переменных окружения.
 */
interface EnvConfig {
    NODE_ENV: string;
    API_URL: string;
    DEBUG: boolean;
}

const env: EnvConfig = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_URL: process.env.API_URL || 'https://questbet.win:2053/api',
    DEBUG: process.env.DEBUG === 'true',
};

export default env;
