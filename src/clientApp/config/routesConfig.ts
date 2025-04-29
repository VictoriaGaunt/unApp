/**
 * routesConfig.ts
 * Дополнительные настройки маршрутов.
 */

export interface RouteConfig {
    path: string;
    name: string;
    requiresAuth?: boolean;
    title?: string;
}

export const routesConfig: RouteConfig[] = [
    { path: '/', name: 'home', requiresAuth: true, title: 'Home' },
    { path: '/login', name: 'login', requiresAuth: false, title: 'Login' },
    { path: '/splash', name: 'splash', requiresAuth: false, title: 'Session Expired' },
];

export default routesConfig;
