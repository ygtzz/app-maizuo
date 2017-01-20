<template>
    <div class="film">
        <c-imgholder :src="film.cover.origin" :alt="film.intro"></c-imgholder>
        <div class="film-text">
            <div>
                <p v-text="film.name"></p>
                <p v-show="bNow" class="count">
                    <span v-text="film.cinemaCount"></span>
                    <span>家影院上映</span>
                    <span v-text="film.watchCount"></span>
                    <span>人购票</span>
                </p>
            </div>
            <div class="right">
                <span class="grade" v-show="bNow" v-text="film.grade"></span>
                <span class="showtime" v-show="!bNow" v-text="showtime"></span>
            </div>
        </div>
    </div>
</template>

<script>
import {fConvertTimeToMonthDay} from 'widget/util/util';
import imgholder from './imgholder.vue';

export default{
    name:'film',
    props: {
      film: {
        type: Object,
        required: true
      },
      type: {
        type: String,
        default: 'NOW_PLAYING'
      }
    },
    computed:{
        showtime(){
            return fConvertTimeToMonthDay(this.film.premiereAt) + '上映';
        },
        bNow(){
            return this.type=='NOW_PLAYING';
        }
    },
    components:{
        'c-imgholder':imgholder
    }
}
</script>

<style lang="sass" scoped>
    .film{
        img{width:100%;display:block;}
        font-size:12px;
        line-height:15px;
    }
    .film-img{padding:0;}
    .film-text{
        background-color:#fff;
        display:flex;
        justify-content:space-between;
        padding:13px;
        p{margin:0}
    }
    .count{color:#9a9a9a;}
    .right{color:#f78360;}
    .grade{font-size:18px;line-height:18px;}
</style>