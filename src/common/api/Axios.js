//axios方法封装处理

import axios from 'axios'

let AxiosMethods = {
    //axios请求
    request(config) {
        return new Promise((resolve, reject) => {
            axios
                .request(config)
                .then((res) => {
                    resolve(res.data);
                })
                .catch(err => {
                    if (err.response) reject(err.response);
                    else reject(err);
                });
        });
    },

    //用于查询资源
    get(url, config) {
        return new Promise((resolve, reject) => {
            axios
                .get(url, config)
                .then((res) => {
                    resolve(res.data);
                })
                .catch(err => {
                    if (err.response) reject(err.response);
                    else reject(err);
                });
        });
    },

    //
    head(url, config) {
        return new Promise((resolve, reject) => {
            axios
                .head(url, config)
                .then((res) => {
                    resolve(res.data);
                })
                .catch(err => {
                    if (err.response) reject(err.response);
                    else reject(err);
                });
        });
    },

    //用于删除服务端的资源
    delete(url, config) {
        return new Promise((resolve, reject) => {
            axios
                .delete(url, config)
                .then((res) => {
                    resolve(res.data);
                })
                .catch(err => {
                    if (err.response) reject(err.response);
                    else reject(err);
                });
        });
    },

    //用于创建资源
    post(url, data, config) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, data, config)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    if (err.response) reject(err.response);
                    else reject(err);
                });
        });
    },

    //用于更新服务端的资源的全部信息
    put(url, data, config) {
        return new Promise((resolve, reject) => {
            axios
                .put(url, data, config)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    if (err.response) reject(err.response);
                    else reject(err);
                });
        });
    },

    //用于更新服务端的资源的部分信息
    patch(url, data, config) {
        return new Promise((resolve, reject) => {
            axios
                .patch(url, data, config)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    if (err.response) reject(err.response);
                    else reject(err);
                });
        });
    }
};

//处理过后，只传URL和数据
export default class Axios{

    //用于查询资源
    static get(url, params){
        return AxiosMethods.get( url,{ params } );
    }

    //用于删除服务端的资源
    static delete(url, params ){
        return AxiosMethods.delete( url,{ params } );
    }

    //用于创建资源
    static post(url, data ){
        return AxiosMethods.post( url,data );
    }

    //用于更新服务端的资源的全部信息
    static put(url, data){
        return AxiosMethods.put( url,data );
    }

    //用于更新服务端的资源的部分信息
    static patch(url, data){
        return AxiosMethods.patch( url,data );
    }
}
