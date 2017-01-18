<template>
    <section class="movie">
        <nav class="nav">
            <ul class="list">
                <li @click="fNavClick" data-type="nowplaying" class="item" :class="{'active':navType == 'nowplaying'}">正在热映</li>
                <li @click="fNavClick" data-type="comingsoon" class="item" :class="{'active':navType != 'nowplaying'}">即将上映</li>
            </ul>
        </nav>
        <div>
            <ul class="nowlist">
                <li class="nowitem">
                    <now-item :film="{}"></now-item>
                </li>
            </ul>
        </div> 
    </section>
</template>
<script>
import {mapActions} from 'vuex';
import nowItem from './now-item.vue';

export default {
    name:'c-movie',
    data(){
        return {
            navType:'nowplaying'
        }
    },
    created(){

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
        'now-item':nowItem
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