<template>
    <div class="nowPlaying">
        <ul class="nowlist">
            <li class="now-item" v-for="film in aFilm">
                <router-link :to="{name:'detail',params:{id:film.id}}">
                    <film :film="film"></film>   
                </router-link>
            </li>
        </ul>
        <div class="more">
            <mt-button type="default" plain size="small">更多热门电影</mt-button>
        </div>
    </div>
</template>

<script>
import {Button} from 'mint-ui';
import film from '../film.vue';

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
  .nowlist{
     a{text-decoration:none;}
     a:link,a:visited,a:hover,a:active{color:#9a9a9a}
  }
  .now-item{
      margin:0 17px 17px 17px;
      background-color:#f9f9f9;
      box-shadow:0.5px 0.5px 1px #a8a8a8;
      cursor: pointer;
  }
  .more{text-align:center;}
</style>