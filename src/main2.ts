import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Axios from 'axios'
import PlugIn from './common/plugIn'
import MyComponent from './components'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
import MetaInfo from 'vue-meta-info'
import pluginComponent from '@/pluginComponent'

import {
    Input, DatePicker, Form, FormItem, Dialog, Button, Dropdown, DropdownMenu, DropdownItem, MessageBox, Select,
    Option, TabPane, Tabs, Progress, Carousel, CarouselItem, Popover
} from 'element-ui'

import VueLazyload from 'vue-lazyload'

import './scss/index.scss'

// import 'element-ui/lib/theme-chalk/index.css'

// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(MyComponent)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Progress)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Popover)
Vue.use(MetaInfo)
Vue.use(pluginComponent)

Vue.prototype.$msgbox = MessageBox
window.axios = Vue.prototype.$axios = Axios
Vue.config.productionTip = true
Vue.use(PlugIn)

// 图片懒加载
Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: '/img/lazyload.jpg',
    attempt: 3
})
// log
if (process.env.NODE_ENV !== "development") {
    if (window.location.host !== 'www.9dwit.com') {
        Raven.config('https://32cb17ab902946ce93d9249c4f02b941@sentry.kids-creative.com.cn/3')
        .addPlugin(RavenVue, Vue).install()
    } else {
        Raven.config('https://49e97ac85edf4b12a1539de93cdb8446@sentry.kids-creative.com.cn/4')
        .addPlugin(RavenVue, Vue).install()
    }
}
// 写入版本
window.version = process.env.version

new Vue({
    router,
    store,
    render: h => h(App),
    created () {
        // 路由切换
        router.beforeEach((to, from, next) => {
            /* 权限拦截 */
            if (!this.$store.state.token && to.meta.Auth) {
                router.push({name: 'login'})
            } else {
                next()
            }
        })
        router.afterEach((to, from) => {
            /* 拦截非法进入 */
            if (!this.$store.state.token && to.meta.Auth) {
                router.push({name: 'login'})
            } else {
                document.title = to.meta.title
            }
        })
        // 请求拦截
        Axios.interceptors.request.use(function (config) {
            // console.log(token)
            const token = store.state.token
            if (config.data) {
                if (config.data instanceof FormData) {
                    config.data.append('token', token)
                } else {
                    config.data.token = token
                }
            }
            if (config.params) {
                config.params.token = token
            }
            return config
        }, function (error) {
            return Promise.reject(error)
        })
        Axios.interceptors.response.use((res) => {           
            return res
        }, err => {
            if (err.response.status === 401 && store.state.token) {
                $.removeCookie('token', { path: '/' })
                store.commit('setToken', '')
                router.push({
                    name: 'login'
                })
            }
            return Promise.reject(err)
        })
    },
    mounted () {
        document.dispatchEvent(new Event('render-event'))
        setTimeout(() => { // 判断是否上课确认提醒
            this.$attendClassReminder.startPolling()
        }, 1000)
    }
}).$mount('#app')

