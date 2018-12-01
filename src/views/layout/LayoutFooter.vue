<template>
    <footer class="layout-footer">
        <p class="copyright"> <b>Copyright &copy; {{copyrightTime}} <a :href="company.url">{{company.name}}</a>.</b> 版权所有.</p>
        <b class="version">Version {{version}}</b>
    </footer>
</template>

<script>
    import release from '@/release'
    export default {
        name: "LayoutFooter",
        data() {
            return {
                version:release.version,
                copyrightTime:release.copyrightTime,
                company:release.company
            };
        }
    }
</script>

<style scoped lang="less">
    /** 配置数据 **/
    @height:50px;
    @fontSize:14px;
    @backgroundColor:#fff;
    @color:#444;

    .layout-footer{
        height: @height;
        background: @backgroundColor;
        display: flex;
        align-items: center;
        padding:0 15px;
        color: @color;
        font-size: @fontSize;
        .copyright{
            display: block;
            flex: 1;
            a{
                color: #3c8dbc;
                &:hover{
                    color: #3073ac;
                }
            }
        }
        .version{
            user-select: none;
        }
    }
</style>
