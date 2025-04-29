import { RouteRecordRaw } from 'vue-router';

const authRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/features/auth/LoginView.vue'),
        meta: {
            title: 'Login',
            requiresAuth: false,
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/features/auth/RegistrationView.vue'),
        meta: {
            title: 'Register',
            requiresAuth: false,
        },
    },
    {
        path: '/password-recovery',
        name: 'PasswordRecovery',
        component: () => import('@/features/auth/PasswordRecoveryView.vue'),
        meta: {
            title: 'Password Recovery',
            requiresAuth: false,
        },
    },
];

export default authRoutes;
