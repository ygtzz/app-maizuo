<template>
    <section>
        <div class="slide-banner">
            <swipe class="swiper">
                <swipe-item class="slide" v-for="banner in aBanner">
                    <a :href="banner.url">
                        <img :src="banner.imageUrl" alt="banner" />
                    </a>
                </swipe-item>
            </swipe>
        </div>
        <div class="movie">
            <now-playing :aFilm="aNowPlaying"></now-playing>
        </div>
    </section>
</template>

<script>
import {Swipe,SwipeItem} from 'mint-ui';
import {mapActions,mapState} from 'vuex';
import nowplaying from './nowplaying.vue';

export default{
    name:'home',
    created(){
        this.fGetData();
    },
    computed:{
        ...mapState({
            model:'home',
            aBanner(){
                return this.model.aBanner;
            },
            aNowPlaying(){
                return this.model.aNowPlaying;
            },
            aCommingSoon(){
                return this.model.aCommingSoon;
            }
        })
    },
    methods:{
        ...mapActions({
            fGetComingSoon: 'fetchComingSoonLists',
            fGetNowPlaying: 'fetchNowPlayingLists',
            fGetBanner: 'fetchBillboards'
        }),
        fGetData(){
            this.fGetBanner();
            this.fGetNowPlaying(1,5);
            this.fGetComingSoon(1,5);            
        }
    },
    components:{
        Swipe,
        SwipeItem,
        'now-playing':nowplaying
    }
}
</script>

<style lang="sass" scoped>
    .swiper img{width:100%;}
    .swiper {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
</style>