import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

/**
 * Глобальное логирование навигации.
 */
export function loggingMiddleware(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): void {
    console.log(`Navigating from ${from.fullPath} to ${to.fullPath}`);
    next();
}