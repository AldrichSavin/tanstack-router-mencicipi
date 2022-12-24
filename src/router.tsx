import { createReactRouter, createRouteConfig, Outlet } from '@tanstack/react-router';
import MainLayout from './layout';

/**
 * pages
 */
import Home from './pages/Home';
import About from './pages/About';

/**
 * create router 
 */
const rootRoute = createRouteConfig({
    component: MainLayout,
});

const HomeRoute = rootRoute.createRoute({ path: '/', component: Home });
const AboutRoute = rootRoute.createRoute({ path: '/about', component: About });

const routeConfig = rootRoute.addChildren([HomeRoute, AboutRoute]);

const router = createReactRouter({routeConfig});

export default router;