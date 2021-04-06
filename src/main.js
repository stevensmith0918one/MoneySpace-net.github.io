import { createApp } from 'vue';
import * as VueRouter from 'vue-router'
import  'animate.css';

import App from './App.vue';
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import ContactUsPage from "./pages/ContactUsPage";
import PaymentPage from "./pages/PaymentPage";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/pricing',
        component: PricingPage
    },
    {
        path: '/contact-us',
        component: ContactUsPage
    },
    {
        path: '/payment',
        component: PaymentPage
    },
    {
        path :'/*',
        component: HomePage
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

const moneyspaceApp = createApp(App)
moneyspaceApp.use(router)
moneyspaceApp.mount('#bodyWrap')
