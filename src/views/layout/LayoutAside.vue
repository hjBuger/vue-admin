<template>
    <aside class="layout-aside">
        <h1 class="aside-title">{{asideData.title}}</h1>
        <nav class="aside-menu">
            <ul class="menu-list">
                <li v-for="item , index in asideData.menuData">
                    <h3 class="list-title"
                        :class="{ 'router-active':$route.name === item.routerName ,active:item.active}"
                        @click="menuHandle(item,index)">
                        <component
                                :is="item.iconType ? item.iconType : asideData.iconType"
                                :icon="item.icon ? item.icon : ( item.child ? asideData.listDefaultIcon : asideData.fileDefaultIcon )"></component>
                        <span>{{item.title}}</span>
                        <fas-icon :icon="item.active? 'angle-down' : 'angle-right'" v-if="item.child"></fas-icon>
                    </h3>
                    <transition name="slider-down">
                        <ol class="list-child-menu" v-if="item.child" v-show="item.active">
                            <li v-for="child in item.child">
                                <router-link :to="child.routerName ? child.routerName : '' " class="list-child-title">
                                    <component
                                            :is="child.iconType ? child.iconType : (item.childIconType ? item.childIconType : asideData.childIconType)"
                                            :icon="child.icon ? child.icon : (item.childIcon ? item.childIcon : asideData.childDefaultIcon)"></component>
                                    <span>{{child.title}}</span>
                                </router-link>
                            </li>
                        </ol>
                    </transition>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
    //aside数据设置
    let asideData = {
        title: '菜单管理',
        fileDefaultIcon: 'edit',        //没有子菜单的默认icon，icon目前使用的是https://fontawesome.com/cheatsheet
        listDefaultIcon: 'list-ul',     //存在子菜单的默认icon
        childDefaultIcon: 'circle',     //子菜单的默认icon
        iconType:'fas-icon',            //fas|far|fab|fal：Solid Icons、Regular Icons、Brand Icons、Light Icons
        childIconType:'far-icon',
        menuData: [
            {
                title: "首页",          //标题
                routerName: 'home',     //路由
                icon: 'home',           //自身icon
                active: true
            },
            {
                title: "表单元素",
                childIcon: 'file',      //子菜单的icon
                active: false,
                child: [
                    {title: '表单输入', routerName: '/#1', icon: 'edit'}, //自身的icon
                    {title: '按钮类型', routerName: '/#2'},
                    {title: 'icon选择', routerName: '/#3'}
                ]
            },
            {
                title: "布局元素",
                active: false,
                child: [
                    {title: '标题预设', routerName: '/#4'},
                    {title: '信息盒子', routerName: '/#5'},
                    {title: '文本盒子', routerName: '/#6'},
                    {title: '图文盒子', routerName: '/#7'}
                ]
            },
            {
                title: "用户管理",
                routerName: 'user',
                active: false,
                icon: "file"
            }
        ]
    };
    export default {
        name: "LayoutAside",
        data() {
            return {
                asideData: asideData
            };
        },
        filters:{

        },
        methods: {
            menuHandle(item, index) {
                //menu状态
                this.asideData.menuData.forEach(list => {
                    if (list !== item) {
                        list.active = false;
                    }
                });
                item.active = !item.active;

                //如果设置了路由，就跳转
                if (!!item.routerName) {
                    this.$router.push({name: item.routerName})
                }

            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
    @commonPadding: 15px;
    @asideWidth: 230px;
    @minWidth: 50px;
    @minWidthFontSoze: 20px;
    .layout-aside {
        width: @asideWidth;
        background: #222d32;
        color: #fff;

        * {
            user-select: none;
        }

        .common {
            padding: @commonPadding;
            font-weight: normal;
        }

        .aside-title {
            .common;
            font-size: 18px;
            color: #85b2c5;
            background: #0b0e10;
            width: 100%;
            font-weight: normal;
        }

        .aside-menu {
            .menu-list {
                overflow: hidden;

                .list-title {
                    .common;
                    display: flex;
                    box-sizing: border-box;
                    color: #b8c7ce;
                    align-items: center;

                    svg, span {
                        display: block;
                    }

                    span {
                        flex: 1;
                        padding-left: 8px;
                    }

                    border-left: 3px solid transparent;

                    &:hover, &.active {
                        color: #fff;
                        background: #1b2327;
                    }

                    &.router-active {
                        border-color: #3c8dbc;
                    }
                }

                .list-child-menu {
                    background: #2c3b41;

                    .list-child-title {
                        .list-title;
                        padding: @commonPadding @commonPadding * 2;
                        font-size: 14px;
                        color: #8aa4af;
                        border: none;

                        &:hover, &.active {
                            color: #fff;
                            background: #253136;
                        }
                    }
                }
            }
        }
    }

    .slider-down-enter {
        transform: translateX(100%);
        opacity: 0;
    }

    .slider-down-enter-active {
        transition: .4s;
        overflow: hidden;
    }

    .slider-down-leave-to {
        height: 0;
        opacity: 0;
    }
</style>
