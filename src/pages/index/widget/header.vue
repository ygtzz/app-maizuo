<template>
    <div class="header">
        <span @click="fNavbarClick" class="nav-wrap">
            <i class="fa fa-bars"></i>
        </span>
        <span class="nav-text">卖座电影</span>
        <span @click="fNavUserClick" class="user-wrap">
            <i class="fa fa-user-o"></i>    
        </span>
    </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
    name:'c-header',
    methods:{
        ...mapActions({
            fToggleSideBar:'fToggleSideBar'
        }),
        fNavbarClick(){
            this.fToggleSideBar();
        },
        fNavUserClick(){

        }
    }
}
</script>
<style lang="sass" scoped>
    .header{
        background:#000;
        color:#efefef;
        line-height:50px;
        height:50px;
    }
    .nav-wrap{
        color:#999;
        width:48px;
        display:inline-block; 
        text-align:center;
        border-right: 1px solid #222;
        box-shadow: 1px 0 1px #363636;       
    }
    .nav-text{margin-left:10px;}
    .user-wrap{
        color:#999;float:right;
        width:50px;
        text-align:center;
    }
</style>