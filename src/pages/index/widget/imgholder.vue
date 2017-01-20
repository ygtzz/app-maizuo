<template>
    <div class="imgHolder" :style="{'background-image':'url('+bgUrl+')'}">
        <img :src="src" :alt="alt"></img>
    </div>
</template>
<script>
export default {
    name:'c-imgHolder',
    props:{
        src:{
            type:String,
            required:true
        },
        alt:{
            type:String,
            default:'img'
        },
        bgUrl:{
            type:String,
            require:true
        }
    }
}
</script>
<style lang="sass" scoped>
    .imgHolder{
        background-size:100%;
        img{width:100%}
    }
</style>