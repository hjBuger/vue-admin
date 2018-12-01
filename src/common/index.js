import {AxiosStatic} from 'axios';
import Ajax from './api/Ajax';
import Utils from './utils'
import './plugin/jquery-3.3.1.min'

export default {
    install(Vue, options){
        /** axios */
        Vue.prototype.$Axios = AxiosStatic;

        /** ajax封装 */
        Vue.prototype.$Ajax = Ajax;

        /** 工具类封装 */
        Vue.prototype.$Utils = Utils;

        /** 全局事件总线 */
        Vue.prototype.$EventBus = new Vue();

        /**把jQuery放入实例下*/
        Vue.prototype.$vQ = jQuery;

        /** 全局组件 */
    }
}

