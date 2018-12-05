export default class VQuery{
    el = null;
    constructor(args){
        this.el = Array.from(VQuery.selector(args));
        return this;
    }

    each(){}

    addClass(name){
        this.el.forEach(el => {
            el.className += " " + name;
        });
        return this;
    }

    removeClass(name){
        let reg = new RegExp("(^" + name + "\\s*|\\s+" + name + ")" ,"g");
        this.el.forEach(el => {
            el.className = el.className.replace(reg,'').replace(/\s+/g," ");
        });
        return this;
    }

    toggleClass(){

    }

    css(){}

    selector(args){
        return document.querySelectorAll(args);
    }

    type(args){
        return Object.prototype.toString.call(args);
    }
}
