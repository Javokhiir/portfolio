import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotfoundPage.vue'
import SeeMyWork from '../views/SeeMyWork.vue'  // Yangi sahifani import qilish

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/see-my-work',
        name: 'SeeMyWork',
        component: SeeMyWork
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
