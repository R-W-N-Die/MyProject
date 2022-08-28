import {createRouter, createWebHistory} from "vue-router";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Products from "./components/Products.vue";

const routes = [
    {
        path: '',
        redirect: { name: 'Login' }
    },
    {
        name: 'Login',
        path: '/login',
        component: Login,
        beforeEnter() {
            const token = localStorage.getItem('token')
            if (token) router.push({ name: 'Products' })
        }
    },
    {
        name: 'Products',
        path: '/products',
        component: Products
    },
    {
        name: 'Register',
        path: '/register',
        component: Register,
        beforeRegister() {
            router.push({ name: 'Login' })
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;