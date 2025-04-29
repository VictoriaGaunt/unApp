import { RouteRecordRaw } from 'vue-router';

const adminRoutes: Array<RouteRecordRaw> = [
    {
        path: '/admin',
        name: 'AdminDashboard',
        component: () => import('@/features/admin/AdminDashboard.vue'),
        meta: {
            title: 'Admin Dashboard',
            requiresAuth: true,
            roles: ['admin'], // Дополнительная проверка по ролям
        },
    },
    {
        path: '/admin/users',
        name: 'UserManagement',
        component: () => import('@/features/admin/UserManagement.vue'),
        meta: {
            title: 'User Management',
            requiresAuth: true,
            roles: ['admin'],
        },
    },
];

export default adminRoutes;
