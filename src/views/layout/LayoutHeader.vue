<template>
    <header class="layout-header">
        <div class="toggle-menu">
            <fas-icon icon="bars"></fas-icon>
        </div>
        <div class="admin-name">{{adminName}}</div>
        <div class="btn-bar">
            <button type="button" class="btn" title="账号设置"><far-icon icon="user"></far-icon> {{username}}</button>
            <button type="button" class="btn" title="注销"><fas-icon icon="sign-out-alt"></fas-icon></button>
        </div>
    </header>
</template>

<script>
    import release from '@/common/config/release.js'
    export default {
        name: "LayoutHeader",
        data() {
            return {
                username:this.$store.state.userInfo.username,
                adminName:release.adminName
            };
        },
        methods: {},
        computed: {},
        mounted() {
        }
    }
</script>

<style scoped lang="less">
    /** 配置数据 **/
    @height:50px;
    @fontSize:20px;
    @backgroundColor:#3c8dbc;
    @color:#fff;
    @btnColor:#367fa9;
    @toggleHover:@btnColor - #060D11;
    @btnFontSize:14px;

    .layout-header{
        height: @height;
        background: @backgroundColor;
        color: @color;
        display: flex;
        align-items: center;
        .toggle-menu{
            width: @height;
            height: @height;
            line-height: @height;
            text-align: center;
            background: @btnColor;
            user-select: none;
            cursor:pointer;
            font-size: @fontSize;
            &:hover{
                background: @toggleHover;
            }
        }
        .admin-name{
            flex: 1;
            font-size: @fontSize;
            font-weight: bold;
            padding: 0 15px;
        }
        .btn-bar{
            height: @height;
            display: flex;
            align-items: stretch;
            .btn{
                display: block;
                padding: 0 15px;
                color: @color;
                border:none;
                background: @backgroundColor;
                font-size: @btnFontSize;
                cursor:pointer;
                &:hover{
                    background:@btnColor;
                }
            }
        }
    }
</style>
