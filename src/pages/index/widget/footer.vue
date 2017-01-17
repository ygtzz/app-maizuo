<template>
    <div class="footer">
        <a href="" class="home">
            <i class="fa fa-home"></i>
            <p>首页</p>
        </a>
        <a href="" class="movie">
            <i class="fa fa-laptop"></i>
            <p>影片</p>
        </a>
        <a href="" class="movieHouse">
            <i class="fa fa-university"></i>
            <p>影院</p>
        </a>
        <a href="" class="my">
            <i class="fa fa-user-circle-o"></i>
            <p>我的</p>
        </a>
    </div>
</template>
<script>
import Vue from "vue";

export default {
    name:'c-footer',
    className: 'footer'
}
</script>
<style lang="sass" scoped>
    .footer{
        text-align: center;
        color:#5D656B;
        background-color:#efefef;
        font-size:12px;
        height:50px;
        display:flex;
        align-items:center;
        a:link,a:visited,a:hover,a:active{color:#5D656B}
        a{
            display:block;
            flex:1;
            text-decoration:none;
            cursor:pointer;
        }
        p{margin:0;padding:0;margin-top:2px}
        i{
            font-size:20px;
        }
    }
</style>