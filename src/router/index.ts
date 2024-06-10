import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Beranda',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/pengajuan/kerja-praktek',
        name: 'Pengajuan - Kerja Praktek',
        component: () => import('../views/PracticalWork.vue')
    },
    {
        path: '/pengajuan/tugas-akhir',
        name: 'Pengajuan - Tugas Akhir',
        component: () => import('../views/Thesis.vue')
    },
    {
        path: '/penelitian-dosen',
        name: 'Penelitian - Dosen',
        component: () => import('../views/TeacherReseach.vue')
    },
    // error 404
    {
        path: '/:pathMatch(.*)*',
        name: 'Error 404',
        component: () => import('../views/404.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
});

router.beforeEach((to, _from, next) => {
    document.title = to.name as string;
    next();
});

export default router;