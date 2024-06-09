import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Beranda',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/auth',
        name: 'Login',
        component: () => import('../views/Authentication.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, _from, next) => {
    document.title = to.name as string;
    next();
});

export default router;