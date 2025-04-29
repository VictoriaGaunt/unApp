import { NavigationGuardNext, RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router';
import { useAuthStore } from '@/entities/user/stores/authStore';

/**
 * Охранник маршрутов, проверяющий авторизацию пользователя.
 * Если пользователь не авторизован, происходит перенаправление на страницу логина.
 */
export function authGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalizedLoaded,
    next: NavigationGuardNext
): void {
    const authStore = useAuthStore();
    if (!authStore.isAuthenticated) {
        // Можно сохранить from для последующего редиректа после логина
        next({ name: 'Login' });
    } else {
        next();
    }
}
