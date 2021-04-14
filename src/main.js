import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import {createI18n} from 'vue-i18n';
import  'animate.css';

import en from './translations/en.json';
import th from './translations/th.json';

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

const i18n = createI18n({
    messages: {
        en: en,
        th: th
    },
    fallbackLocale: 'th'
})

const moneyspaceApp = createApp(App)
moneyspaceApp.use(i18n);
moneyspaceApp.use(router)
moneyspaceApp.mount('#bodyWrap')
