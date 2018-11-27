//请求api集合

import Axios from './Axios'

class Ajax {
    /** 登录 */
    LOGIN = (params) => Axios.post('/login', params);

    /** 获取用户信息 demo */
    GetUserInfo = (params) => Axios.get('/users', params);
}

export default new Ajax();
