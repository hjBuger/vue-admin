<template>
    <div class="home">
        <fa-icon :icon="['fas', 'user-circle']"></fa-icon>
        <fa-icon :icon="['far', 'user-circle']"></fa-icon>
        <fa-icon icon="user-circle"></fa-icon>
        <icon-far icon="user"></icon-far>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components:{
        },
        mounted(){
            let form = new FormData();
            //form.append("file",file);
            console.log(form.constructor === FormData);
        }
    }
</script>
