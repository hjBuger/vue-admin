/** 应用插件管理 **/

import Vue from 'vue'

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//FontAwesomeIcon
import './FontAwesomeIcon'

// 图片懒加载
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
    preLoad: 1.3,                       //预加载高度比例,默认1.3
    error: '/img/lazyLoadError.jpg',     //图片路径错误时加载图片
    loading: '/img/lazyLoading.jpg',    //预加载图片
    attempt: 3                          //尝试加载图片数量，默认3
});
