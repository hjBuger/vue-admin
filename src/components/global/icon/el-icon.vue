<template>
    <i :class="IconClass"></i>
</template>

<script>
    export default {
        name: "el-icon",
        props:{
            icon:String
        },
        computed: {
            /**
             * @return {string}
             */
            IconClass(){
                return ('el-icon-' + this.icon);
            }
        }
    }
</script>

<style scoped lang="less">

</style>
