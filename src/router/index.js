import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const constantRoutes = [
    {
        path: '/',
        name: 'index',
        component: resolve => require(['@/views/index'], resolve)
    },
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['@/views/login'], resolve)
    }

];

const router = new Router({
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
});
export default router