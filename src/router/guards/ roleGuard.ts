import { NavigationGuardNext, RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router';
import { useAuthStore } from '@/entities/user/stores/authStore';

/**
 * Охранник маршрутов, проверяющий, имеет ли пользователь необходимую роль.
 * Предполагается, что meta.roles содержит массив разрешённых ролей.
 */
export function roleGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalizedLoaded,
    next: NavigationGuardNext
): void {
    const authStore = useAuthStore();
    const requiredRoles = to.meta.roles as string[] | undefined;
    if (requiredRoles && authStore.user) {
        const userRoles = authStore.user.roles;
        const hasAccess = requiredRoles.some(role => userRoles.includes(role));
        if (!hasAccess) {
            // Если доступа нет, можно перенаправить на страницу ошибки или логина
            next({ name: 'Login' });
        } else {
            next();
        }
    } else {
        next();
    }
}
