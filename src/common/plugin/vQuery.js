export default class VQuery{
    el = null;
    constructor(args){
        this.el = Array.from(VQuery.selector(args));
        this.el = this.el.length >1 ? this.el : this.el[0];
        return this;
    }

    each(){}

    addClass(){}

    removeClass(){}

    toggleClass(){}

    css(){}

    static selector(args){
        return document.querySelectorAll(args);
    }

    static type(args){

    }
}
