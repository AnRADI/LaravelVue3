
import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from "./Pages/Shop/Welcome";
import Product from "./Pages/Shop/Product";

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        redirect: 'welcome',
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: Welcome,
        meta: {
            layout: 'shop-layout'
        }
    },
    {
        path: '/product',
        name: 'product',
        component: Product,
        meta: {
            layout: 'shop-layout'
        }
    }
];



const router = new VueRouter({

    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});


export default router;
