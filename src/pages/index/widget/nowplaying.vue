<template>
    <ul class="nowPlaying">
        <li class="now-item" v-for="film in aFilm">
            <film :film="film"></film>
        </li>
    </ul>
</template>

<script>
import {Swipe,SwipeItem} from 'mint-ui';
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
        film
    }
}
</script>

<style lang="sass" scoped>
  .nowPlaying{padding:0;marigin:0;list-style:none;}
  .now-item{
      margin:0 17px 17px 17px;
      background-color:#f9f9f9;
      box-shadow:0.5px 0.5px 1px #a8a8a8;
      cursor: pointer;
  }
</style>