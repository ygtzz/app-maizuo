<template>
    <section>
        <div class="slide-banner">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide class="slide" v-for="banner in aBanner">
                    <a :href="banner.url">
                        <img :src="banner.imageUrl" alt="banner" />
                    </a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import {mapActions,mapState} from 'vuex';

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
            }
        }),
        swiperOption: {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            //slidesPerView: 1,
            paginationClickable: true,
            //spaceBetween: 30,
            autoplay: 3000,
            autoHeight: true,
            //loop: true
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
    .swiper img{width:100%;}
</style>