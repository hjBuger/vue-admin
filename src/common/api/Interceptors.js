import router from '../../router'
import store from '../../store'
import Axios from 'axios'
import Utils from '../utils'

/**
 *  路由切换拦截
 **/
router.beforeEach((to, from, next) => {
    /* 权限拦截 */
    if (!store.state.token && to.meta.Auth) {
        router.push({name: 'login'});
    } else {
        next()
    }
});

router.afterEach((to, from) => {
    /* 拦截非法进入 */
    if (!store.state.token && to.meta.Auth) {
        router.push({name: 'login'})
    } else {
        document.title = to.meta.title
    }
});

/**
 *   Axios拦截器：在请求或响应被 then 或 catch 处理前拦截它们。
 **/

//request：请求拦截
Axios.interceptors.request.use(function (config) {
    // console.log(token)
    const token = store.state.token;
    if (config.data) {
        if (config.data.constructor === FormData) {//form数据处理
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
});

//response：响应拦截
Axios.interceptors.response.use((res) => {
    return res
}, err => {
    //401:表示需要登录
    if (err.response.status === 401 && store.state.token) {
        //token过期
        Utils.Cookies.remove('token');
        store.commit('setToken', '');
        router.push({
            name: 'login'
        })
    }
    return Promise.reject(err)
});
