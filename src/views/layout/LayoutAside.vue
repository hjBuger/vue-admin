<template>
    <aside class="layout-aside">
        <h1 class="aside-title">{{asideData.title}}</h1>
        <nav class="aside-menu">
            <ul class="menu-list">
                <li v-for="item , index in asideData.menuData">
                    <h3 class="list-title"
                        :class="{ 'router-active':$route.name === item.routerName ,active:item.active}"
                        @click="menuHandle(item,index)">
                        <fas-icon
                                :icon="item.icon ? item.icon : ( item.child ? asideData.listDefaultIcon : asideData.fileDefaultIcon )"></fas-icon>
                        <span>{{item.title}}</span>
                        <fas-icon :icon="item.active? 'angle-down' : 'angle-right'" v-if="item.child"></fas-icon>
                    </h3>
                    <transition name="slider-down">
                        <ol class="list-child-menu" v-if="item.child" v-show="item.active">
                            <li v-for="child in item.child">
                                <router-link :to="child.routerName ? child.routerName : '' " class="list-child-title">
                                    <far-icon
                                            :icon="child.icon ? child.icon : (item.childIcon ? item.childIcon : asideData.childDefaultIcon)"></far-icon>
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


    let demoAsideData = {
        title: '菜单管理',
        fileDefaultIcon: 'edit',        //没有子菜单的默认icon
        listDefaultIcon: 'list-ul',     //存在子菜单的默认icon
        childDefaultIcon: 'circle',     //子菜单的默认icon
        menuData: [
            {
                title: "首页",         //标题
                routerName: 'home',         //路由
                icon: 'home',           //自身icon
                active: true
            },
            {
                title: "菜单一",
                childIcon: 'file',      //子菜单的icon
                active: false,
                child: [
                    {title: '子菜单一', routerName: '/#1', icon: 'edit'},
                    {title: '子菜单二', routerName: '/#2'},
                    {title: '子菜单三', routerName: '/#3'}
                ]
            },
            {
                title: "菜单二",
                active: false,
                child: [
                    {title: '子菜单一', routerName: '/#4'},
                    {title: '子菜单二', routerName: '/#5'},
                    {title: '子菜单三', routerName: '/#6'},
                    {title: '子菜单四', routerName: '/#7'},
                    {title: '子菜单五', routerName: '/#8'}
                ]
            },
            {
                title: "菜单三",
                active: false,
                child: [
                    {title: '子菜单一', routerName: '/#4'},
                    {title: '子菜单二', routerName: '/#5'},
                    {title: '子菜单三', routerName: '/#6'},
                    {title: '子菜单四', routerName: '/#7'},
                    {title: '子菜单五', routerName: '/#8'}
                ]
            },
            {
                title: "菜单四",
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
                asideData: demoAsideData
            };
        },
        filters:{

        },
        methods: {
            menuHandle(item, index) {

                this.asideData.menuData.forEach(list => {
                    if (list !== item) {
                        list.active = false;
                    }
                });
                item.active = !item.active;

                if (!!item.routerName) {
                    this.$router.push({name: item.routerName})
                }

            }
        },
        computed: {},
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
