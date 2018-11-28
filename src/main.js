import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//global components
//全局注册的行为必须在根 Vue 实例 (通过 new Vue) 创建之前发生
import './components'

//plugin
import './common/plugin/FontAwesomeIcon'

//拦截器
import Interceptors from'./common/api/Interceptors'

//style
import './common/style/base.less'


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
    created(){

         //拦截器
        Interceptors();

    }
}).$mount('#app')
