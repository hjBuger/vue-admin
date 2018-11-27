import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Login from './views/login/Login'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            alias:'/home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})
