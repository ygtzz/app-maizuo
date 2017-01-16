<template>
    <div class="film">
        <div class="film-img">
            <img :src="film.cover.origin" :alt="film.intro">
        </div>
        <div class="film-text">
            <div>
                <p v-text="film.name"></p>
                <p class="count">{{film.cinemaCount}}家影院上映{{film.watchCount}}人购票</p>
            </div>
            <div class="film-grade">
                <span v-text="film.grade"></span>
            </div>
        </div>
    </div>
</template>

<script>
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
    methods:{
    
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
    .film-grade{font-size:18px;line-height:18px;color:#f78360;}
</style>