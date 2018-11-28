import {AxiosStatic} from 'axios';
import Ajax from './api/Ajax';
import Utils from './utils'
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

        /** 全局组件 */
    }
}

