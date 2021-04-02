import { createApp } from 'vue'
import App from './App.vue'
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import * as VueRouter from 'vue-router'

const routes = [
    {
        path: '/home',
        component: HomePage
    },
    {
        path: '/pricing',
        component: PricingPage
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})



const moneyspaceApp = createApp(App)
moneyspaceApp.use(router)
moneyspaceApp.mount('#bodyWrap')
