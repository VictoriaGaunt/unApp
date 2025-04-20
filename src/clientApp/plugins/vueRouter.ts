/**
 * vueRouter.ts
 * Расширенная настройка Vue Router.
 */
import router from '@/router';

router.beforeEach((to, from, next) => {
    console.log(`Routing: ${from.fullPath} -> ${to.fullPath}`);
    next();
});

export default router;
