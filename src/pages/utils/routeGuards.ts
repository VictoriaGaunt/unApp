// pages/utils/routeGuards.ts

import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

/**
 * Пример локальной логики защиты маршрутов для страниц.
 */
export function pageGuard(
    to: RouteLocationNormalized,
    next: NavigationGuardNext
): void {
    // Здесь можно реализовать дополнительную логику защиты маршрутов для конкретных страниц
    next();
}
