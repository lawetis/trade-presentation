import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/index.vue')
        },
        {
            path: '/charts',
            name: 'charts',
            component: () => import('../views/charts.vue')
        }
    ]
})

export default router
