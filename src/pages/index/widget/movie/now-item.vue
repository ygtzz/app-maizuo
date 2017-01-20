<template>
    <div class="coming">
       <div class="left">
            <imgholder :src="film.cover.origin"></imgholder>
       </div>
       <div class="right">
            <div>
                <div class="score-wrap">
                    <span class="score" v-text="film.grade"></span>
                    <i class="fa fa-angle-right"></i>
                </div>
                <div class="title" v-text="film.name"></div>  
            </div>
            <div class="desc" v-text="film.intro"></div>
            <div>
                <span v-text="film.cinemaCount"></span>
                <span>家影院上映</span>
                <span v-text="film.watchCount"></span>
                <span>人购票</span>
            </div>
       </div>
    </div>
</template>
<script>
import imgHolder from '../imgholder.vue';

export default {
    name:'now-item',
    props:{
        film:{
            type:Object,
            required:true
        }
    },
    components:{
        'imgholder':imgHolder
    }
}
</script>
<style lang="sass" scoped>
    
</style>