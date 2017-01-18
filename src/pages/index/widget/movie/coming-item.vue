<template>
    <div class="coming">
       <div class="left">
            <img src="" alt="film img">
       </div>
       <div class="right">
            <div>
                <div class="title"></div>  
            </div>
            <div class="desc"></div>
            <div>
                <span v-text=""></span>
                <span>上映</span>
                <span v-text=""></span>
                <span>星期五</span>
            </div>
       </div>
    </div>
</template>
<script>
export default {
    name:'coming-item',
    props:{
        film:{
            type:Object,
            required:true
        }
    }
}
</script>
<style lang="sass" scoped>
    
</style>