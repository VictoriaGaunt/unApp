import router from '@/router';

// Пример: глобальное логирование навигации
router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.fullPath} to ${to.fullPath}`);
    next();
});

export default router;