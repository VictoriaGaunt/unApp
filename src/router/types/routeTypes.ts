import { RouteMeta } from 'vue-router';

/**
 * Расширяем стандартный интерфейс meta, добавляя поддержку дополнительных полей.
 */
export interface AppRouteMeta extends RouteMeta {
    title?: string;
    requiresAuth?: boolean;
    roles?: string[];
}

/**
 * Интерфейс описания маршрута.
 */
export interface AppRoute {
    path: string;
    name: string;
    component: any; // можно заменить на более точный тип
    meta?: AppRouteMeta;
}
