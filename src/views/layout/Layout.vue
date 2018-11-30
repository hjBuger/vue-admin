<template>
    <div class="Layout">
        <LayoutHeader></LayoutHeader>
        <div class="layout-content">
            <LayoutAside></LayoutAside>
            <div class="layout-main">
                <div class="main-box">
                    <slot>main</slot>
                </div>
                <LayoutFooter></LayoutFooter>
            </div>
        </div>
    </div>
</template>

<script>
    import LayoutHeader from  './LayoutHeader'
    import LayoutAside from  './LayoutAside'
    import LayoutFooter from  './LayoutFooter'
    export default {
        name: "Layout",
        data() {
            return {};
        },
        components:{
            LayoutHeader,
            LayoutAside,
            LayoutFooter
        },
        methods: {},
        computed: {},
        mounted() {
        }
    }
</script>

<style scoped lang="less">
    .Layout{
        display: flex;
        flex-direction: column;
        min-height: 100%;
        .layout-content{
            flex: 1;
            display: flex;
            align-items: stretch;
            .layout-main{
                flex: 1;
                display: flex;
                flex-direction: column;
                background: #ecf0f5;
                .main-box{
                    flex: 1;
                    padding: 15px 15px 30px;
                }
            }
        }
    }
</style>
