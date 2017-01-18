<template>
    <div class="coming">
       <div class="left">
            <img src="" alt="film img">
       </div>
       <div class="right">
            <div>
                <div class="score-wrap">
                    <span class="score"></span>
                    <i class="fa fa-angle-right"></i>
                </div>
                <div class="title"></div>  
            </div>
            <div class="desc"></div>
            <div>
                <span v-text=""></span>
                <span>家影院上映</span>
                <span v-text=""></span>
                <span>人购票</span>
            </div>
       </div>
    </div>
</template>
<script>
export default {
    name:'now-item',
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