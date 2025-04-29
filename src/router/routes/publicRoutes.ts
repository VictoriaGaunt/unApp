import { RouteRecordRaw } from 'vue-router';

const publicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/features/home/HomeView.vue'),
        meta: {
            title: 'Home',
            requiresAuth: false,
        },
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/features/public/AboutView.vue'),
        meta: {
            title: 'About',
            requiresAuth: false,
        },
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/features/public/ContactView.vue'),
        meta: {
            title: 'Contact',
            requiresAuth: false,
        },
    },
];

export default publicRoutes;
