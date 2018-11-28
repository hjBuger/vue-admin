import Axios from './Axios'

//请求api集合
class Ajax {
    /** 登录 */
    LOGIN = (params) => Axios.post('/login', params);

    /** 获取用户信息 demo */
    GetUserInfo = (params) => Axios.get('/users', params);
}

export default new Ajax();
