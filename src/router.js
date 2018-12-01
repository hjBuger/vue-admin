import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Login from './views/login/Login'
import User from './views/user/User'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '*', redirect: '/' },
        {
            path: '/',
            name: 'home',
            alias:'/home',
            component: Home,
            meta: { title: '后台管理首页', Auth: true}
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/user',
            name: 'user',
            component: User,
            meta: { title: '用户管理', Auth: true}
        }
    ]
})
