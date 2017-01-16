<template>
    <section>
        <div class="banner">
            <swiper :options="swiperOption">
                <swiper-slide>
                    
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import {mapActions} from 'vuex';
//import actions from 'index/vuex/actions';

export default{
    name:'home',
    created(){
        this.fGetData();
    },
    computed:{
        swiperOption: {
            autoplay: 3000,
            autoHeight: true
        }
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
        swiper,
        swiperSlide
    }
}
</script>

<style lang="sass" scoped>

</style>