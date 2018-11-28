/** 获取url上的参数 **/
const UrlParams = ( key ) => {
    let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
};

/** Cookies **/
const Cookies = {
    get(key){
        let name = key + "=";
        let ca = document.cookie.split(';');
        for(let i=0; i<ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0)===' ') c = c.substring(1);
            if (c.indexOf(name) !== -1) return c.substring(name.length, c.length);
        }
        return "";
    },
    set( key,value ,day = 0){
        let expires = '';
        if( day !== 0 ){
            let d = new Date();
            d.setTime( d.getTime() + (day*24*60*60*1000));
            expires = "; expires="+d.toUTCString();
        }
        document.cookie = key + "=" + value + expires;
    },
    remove(key){
        Cookies.set(key, "", -1);//设置过期
    },
    clear(){
        let keys = [];
        document.cookie.split(';').forEach(item => {
            keys.push(item.split('=')[0]);
        });
        keys.forEach(key => {
            Cookies.set(key, "", -1);//设置过期
        })
    },
    info(){
        return document.cookie;
    }
};

/** userAgent **/
const UA = (()=>{
    //获取浏览器信息
    return null;
})();

export default {
    Cookies,
    UrlParams,
    UA
}
