<template>
    <div class="cominSoon">
        <div class="coming-line">
            <div class="banner">即将上映</div>
        </div>
        <ul class="cominglist">
            <li class="coming-item" v-for="film in aFilm">
                <router-link :to="{name:'detail',params:{id:film.id}}">
                    <film :film="film" type="COMING_SOON"></film>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import film from '../film.vue';

export default{
    name:'coming-soon',
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
  .cominglist{
     a{text-decoration:none;}
     a:link,a:visited,a:hover,a:active{color:#9a9a9a}
  }
  .coming-item{
      margin:0 17px 17px 17px;
      background-color:#f9f9f9;
      box-shadow:0.5px 0.5px 1px #a8a8a8;
      cursor: pointer;
  }
  .coming-line{border-bottom:1px solid #a8a8a8;margin-top:30px;margin-bottom:50px;}
  .banner{background:#a7a7a7;color:#fff;font-size:12px;padding:4px;text-align:center;border-radius:4px;width:56px;margin:0 auto;margin-bottom:-10px;}
</style>