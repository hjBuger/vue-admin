import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//plugin：应用插件
import './common/plugin'

//style：初始化样式
import './common/style/base.less'

//全局注册工具、组件
import Common from './common'

Vue.use(Common);

//global components
//全局注册的行为必须在根 Vue 实例 (通过 new Vue) 创建之前发生
import './components'


//拦截器
import './common/api/Interceptors'


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
