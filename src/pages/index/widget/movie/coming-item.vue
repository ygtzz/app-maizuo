<template>
    <div class="coming fix">
       <div class="left">
            <imgholder :src="film.poster.thumbnail"></imgholder>
       </div>
       <div class="right">
            <div>
                <div class="title" v-text="film.name"></div>  
            </div>
            <div class="desc" v-text="film.intro"></div>
            <div class="text">
                <span v-text="date"></span>
                <span>上映</span>
                <span class="week">星期五</span>
            </div>
       </div>
    </div>
</template>
<script>
import imgholder from '../imgholder.vue';
import {fConvertTimeToMonthDay} from 'widget/util/util';

export default {
    name:'coming-item',
    props:{
        film:{
            type:Object,
            required:true
        }
    },
    computed:{
        date(){
            return fConvertTimeToMonthDay(this.film.premiereAt);
        }
    },
    components:{
        'imgholder': imgholder
    }
}
</script>
<style lang="sass" scoped>
    .coming{
        font-size:12px;color:#8e8e8e;line-height:24px;padding:15px;
        border-bottom:1px dashed #c9c9c9;cursor:pointer;
    }    
    .title{font-size:16px;line-height:32px;color:#000;}
    .text{color:#ffb375;}
    .week{margin-left:30px;}
    .left{width:60px;float:left;overflow:hidden;}
    .right{display:table-cell;width:2000px;padding-left:15px;}
</style>