<template>
    <div class="Login" ref="Login">
        <div class="bg"></div>
        <div class="login-box">
            <h4 class="title">后台管理系统</h4>
            <div class="form-item">
                <label for="username">
                    <fa-icon icon="user"></fa-icon>
                </label>
                <input type="text" id="username" v-model="username" placeholder="请输入用户名" @focus="focusFn" maxlength="20">
            </div>
            <div class="form-item">
                <label for="password">
                    <fa-icon icon="lock"></fa-icon>
                </label>
                <input type="password" id="password" v-model="password" placeholder="请输入密码" @focus="focusFn" maxlength="20">
            </div>
            <div class="form-item submit-box">
                <button class="toLogin" @click="toLogin">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username:'',
                password:''
            };
        },
        methods: {
            focusFn(ev){
                let formItem = document.querySelectorAll('.form-item');
                formItem.forEach(item => {
                    item.className = item.className.replace(" focus","");
                });
                ev.target.parentNode.className += ' focus';
            },
            toLogin(){
                if(!this.valid()) return false;
            },
            valid(){
                return false;
            },
            winSize(){
                let dom = {
                    width: document.documentElement.clientWidth ,
                    height: document.documentElement.clientHeight
                };
                this.$refs.Login.style.width = dom.width + 'px';
                this.$refs.Login.style.height = dom.height + 'px';
                let that = this;
                window.onresize = function () {
                    that.winSize();
                }
            }
        },
        mounted() {
            this.winSize();
        }
    }
</script>

<style scoped lang="less">
    @placeholderColor:#eee;
    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color:@placeholderColor;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:@placeholderColor;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:@placeholderColor;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color:@placeholderColor;
    }
    .Login{
        display: flex;
        position: relative;
        overflow: hidden;
        background: url("../../assets/login-bg.jpg");
        background-size: cover;
        .bg{
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 10;
            top:0;
            left: 0;
            filter: blur(2px);
        }
        .login-box{
            position: absolute;
            z-index: 100;
            left: 50%;
            top: 40%;
            transform: translate(-50%,-50%);
            width: 450px;
            min-height: 350px;
            background: rgba(67, 67, 67, 0.3);
            padding: 25px;
            box-sizing: border-box;
            border-radius: 6px;
            overflow: hidden;
            .title{
                line-height: 40px;
                color: #fff;
                font-size: 28px;
                text-align: center;
                margin-bottom: 25px;
            }
            @itemHeight:44px;
            .form-item{
                display: flex;
                margin-bottom: 25px;
                border: 1px solid #fff;
                height: @itemHeight;
                label{
                    width: @itemHeight;
                    height: 100%;
                    line-height: @itemHeight;
                    display: block;
                    font-weight: normal;
                    text-align: center;
                    color: #fff;
                    font-size: 24px;
                    background: rgba(67, 67, 67, 0.3);
                }
                input{
                    flex:1;
                    display: block;
                    box-sizing: border-box;
                    padding-left: 15px;
                    padding-right: 15px;
                    color: #fff;
                    border: none;
                    background: none;
                    font-size: 16px;
                }
                &.focus{
                    box-shadow: 0 0 7px #1da6fd;
                }

                &.submit-box{
                    border: none;
                    margin-top: 35px;
                    .toLogin{
                        display: block;
                        flex: 1;
                        height: 100%;
                        border: none;
                        background: #4ecd30;
                        color: #fff;
                        font-size: 18px;

                        &:hover{
                            background: #4bc72e;
                        }
                    }
                }
            }
        }
    }
</style>
