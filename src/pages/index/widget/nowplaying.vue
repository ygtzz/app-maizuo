<template>
    <div class="nowPlaying">
        <ul class="nowlist">
            <li class="now-item" v-for="film in aFilm">
                <film :film="film"></film>
            </li>
        </ul>
        <div class="more">
            <mt-button type="default" plain size="small">更多热门电影</mt-button>
        </div>
    </div>
</template>

<script>
import {Button} from 'mint-ui';
import {mapActions,mapState} from 'vuex';
import film from './film.vue';

export default{
    name:'now-playing',
    props:{
        aFilm:{
            type:Array,
            required:true
        }
    },
    components:{
        film,
        'mt-button':Button
    }
}
</script>

<style lang="sass" scoped>
  .nowlist{padding:0;marigin:0;list-style:none;}
  .now-item{
      margin:0 17px 17px 17px;
      background-color:#f9f9f9;
      box-shadow:0.5px 0.5px 1px #a8a8a8;
      cursor: pointer;
  }
  .more{text-align:center;}
</style>