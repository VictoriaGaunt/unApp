import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import routes from './routes'; // Импорт объединённого массива маршрутов
import { authGuard } from './guards'; // Импорт глобального охранника (например, проверки авторизации)

// Создание экземпляра роутера
const router = createRouter({
    history: createWebHistory(),
    routes: routes as RouteRecordRaw[],
});

// Регистрация глобального охранника маршрутов
router.beforeEach((to, from, next) => {
    // Если у маршрута указан meta.requiresAuth, вызываем authGuard
    if (to.meta.requiresAuth) {
        authGuard(to, from, next);
    } else {
        next();
    }
});

export default router;
