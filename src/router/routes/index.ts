import publicRoutes from './publicRoutes';
import authRoutes from './authRoutes';
import dashboardRoutes from './dashboardRoutes';
import adminRoutes from './adminRoutes';

const routes = [
    ...publicRoutes,
    ...authRoutes,
    ...dashboardRoutes,
    ...adminRoutes,
];

export default routes;