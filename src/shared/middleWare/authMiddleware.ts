import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '@/entities/user/stores/authStore';

/**
 * Проверка доступа к маршрутам.
 * Если маршрут требует авторизации и пользователь не авторизован, перенаправляет на страницу логина.
 */
export function authMiddleware(to: RouteLocationNormalized, next: NavigationGuardNext): void {
    const authStore = useAuthStore();
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next({ name: 'Login' });
    } else {
        next();
    }
}