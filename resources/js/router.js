
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        redirect: 'welcome',
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: () => import('@/Pages/Shop/Welcome'),
        meta: {
            layout: 'shop-layout'
        }
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('@/Pages/Shop/Product'),
        meta: {
            layout: 'shop-layout'
        }
    }
];



const router = createRouter({

    history: createWebHistory(),

    routes,
});


export default router;
