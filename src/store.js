import Vue from 'vue'
import Vuex from 'vuex'
import Utils from './common/utils'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: Utils.Cookies.get('token'),
        userInfo: {},
        UA:Utils.UA
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload;
        },
        setUser(state, payload) {
            state.userInfo = payload;
        },
        setUA(state, payload){
            state.UA = payload;
        }
    },
    actions: {}
})
