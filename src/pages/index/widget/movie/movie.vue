<template>
    <section class="movie">
        <nav class="nav">
            <ul class="list">
                <li @click="fNavClick" data-type="nowplaying" class="item" :class="{'active':navType == 'nowplaying'}">正在热映</li>
                <li @click="fNavClick" data-type="comingsoon" class="item" :class="{'active':navType != 'nowplaying'}">即将上映</li>
            </ul>
        </nav>
        <div>
            <ul class="nowlist" :class="{'dn':navType != 'nowplaying'}">
                <li class="nowitem" v-for="film in aNowPlaying">
                    <router-link :to="{name:'detail',params:{id:film.id}}">
                        <now-item :film="film"></now-item>
                    </router-link>
                </li>
            </ul>
            <ul class="cominglist" :class="{'dn':navType == 'nowplaying'}">
                <li class="comingitem" v-for="film in aComingSoon">
                    <router-link :to="{name:'detail',params:{id:film.id}}">
                        <coming-item :film="film"></coming-item>
                    </router-link>
                </li>
            </ul>
        </div> 
    </section>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
import nowItem from './now-item.vue';
import comingItem from './coming-item.vue';

export default {
    name:'c-movie',
    data(){
        return {
            navType:'nowplaying'
        }
    },
    watch:{
        navType:{
            handler(val){
                if(val == 'nowplaying'){
                    this.fetchNowPlayingLists(1,10);
                }
                else{
                    this.fetchComingSoonLists(1,10);
                }
            },
            immediate:true
        }
    },
    computed:{
        ...mapGetters({
            aNowPlaying: 'aNowPlaying',
            aComingSoon: 'aComingSoon'
        })
    },
    methods:{
        ...mapActions({
            fetchNowPlayingLists:'fetchNowPlayingLists',
            fetchComingSoonLists:'fetchComingSoonLists'
        }),
        fNavClick(e){
            this.navType = e.target.getAttribute('data-type');
        }
    },
    components:{
        'now-item':nowItem,
        'coming-item':comingItem
    }
}
</script>
<style lang="sass" scoped>
    .movie{}
    .nav{padding:0 15px;}
    .list{display:flex;border-bottom:1px solid #fe6e00;}
    .item{line-height:50px;width:50%;text-align:center;font-size:16px;color:#6a6a6a;}
    .item.active{color:#fe6e00;border-bottom:solid;}
</style>