<template>
    <div class="detail">
        <div class="img">
            <img :src="film.cover.origin" alt="film img">
        </div>
        <div class="intro">
            <div class="title">
                影片简介
            </div>
            <dl class="list">
                <dt>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</dt>
                <dd>{{film.director}}</dd>
                <dt>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</dt>
                <dd>{{actors}}</dd>
                <dt>地区语言：</dt>
                <dd>{{film.nation}}({{film.language}})</dd>
                <dt>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</dt>
                <dd>{{film.category}}</dd>
                <dt>上映日期：</dt>
                <dd>{{showTime}}</dd>
            </dl>
            <div class="intro-text">{{film.synopsis}}</div>
            <div class="btn-wrap">
                <mt-button type="default">立即购票</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex';
import {fConvertTimeToMonthDay} from 'widget/util/util';
import {Button} from 'mint-ui';

export default{
    name:'detail',
    created(){
        this.fetchFilmDetail(this.$route.params.id);
    },
    computed:{
        ...mapState({
            model:'detail'
        }),
        film(){
            return this.model.film;
        },
        actors(){
            var aActor = this.film.actors || [];
            return aActor.reduce(function(pre,cur){
                return pre + '|' + cur.name;
            },'').slice(1);
        },
        showTime(){
            return fConvertTimeToMonthDay(this.film.premiereAt) + '上映';
        }
    },
    methods:{
        ...mapActions({
            fetchFilmDetail:'fetchFilmDetail'
        })
    },
    components:{
        'mt-button':Button
    }
}
</script>

<style lang="sass" scoped>
    .detail{
        font-size:12px;
        img{width:100%;}
    }
    .intro{line-height:18px;}
    .title{font-size:16px;border-left:16px solid #e4c89c;padding-left:4px;margin:16px 0;}
    .list{
        padding-left:20px;
        margin-bottom:5px;
        dt{float:left;text-align:justify;}
        dt,dd{padding:3px 0;}
    }
    .intro-text{padding-left:20px;}
    .btn-wrap{
        text-align:center;position:fixed;width:100%;bottom:20px;
        button{
            background-color: #fe8233;
            color:#fff;
            border-radius:18px;
            height:36px;
            line-height:36px;
            font-size:14px;
            min-width:156px;
        }
    }
</style>