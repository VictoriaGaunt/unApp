import { RouteRecordRaw } from 'vue-router';

const dashboardRoutes: Array<RouteRecordRaw> = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/features/dashboard/DashboardView.vue'),
        meta: {
            title: 'Dashboard',
            requiresAuth: true,
        },
    },
    {
        path: '/dashboard/profile',
        name: 'UserProfile',
        component: () => import('@/features/dashboard/ProfileView.vue'),
        meta: {
            title: 'Profile',
            requiresAuth: true,
        },
    },
];

export default dashboardRoutes;
