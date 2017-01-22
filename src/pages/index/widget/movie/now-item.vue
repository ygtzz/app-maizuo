<template>
    <div class="now fix">
       <div class="left">
            <imgholder :src="film.poster.thumbnail"></imgholder>
       </div>
       <div class="right">
            <div>
                <div class="score-wrap r">
                    <span class="score" v-text="film.grade"></span>
                    <i class="fa fa-angle-right"></i>
                </div>
                <div class="title" v-text="film.name"></div>  
            </div>
            <div class="desc" v-text="film.intro"></div>
            <div>
                <span v-text="film.cinemaCount"></span>
                <span>家影院上映</span>
                <span class="watch" v-text="film.watchCount"></span>
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
    .now{
        font-size:12px;
        color:#8e8e8e;
        line-height:24px;
        padding:15px;
        border-bottom:1px dashed #c9c9c9;
        cursor:pointer;
    }
    .score{
        font-size:16px;
        color:#fc7103;
        vertical-align:middle;
    }
    .title{
        font-size: 16px;
        line-height: 32px;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .watch{margin-left:30px;}
    .left{width:60px;float:left;overflow:hidden;}
    .right{display:table-cell;width:2000px;padding-left:15px}
</style>