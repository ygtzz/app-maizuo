<template>
    <div id="app">
        <div class="container">
            <header class="top-fixed">
                <c-header></c-header>  
            </header>
            <section class="body">
                <router-view></router-view>
            </section>
            <footer class="bottom-fixed">
                <c-footer></c-footer> 
            </footer>
        </div>
        <sidebar :bShow="model.bShowSideBar"></sidebar>                                   
    </div>
</template>
<script>
import {mapState} from 'vuex';
import header from './widget/header.vue';
import footer from './widget/footer.vue';
import sidebar from './widget/sidebar.vue';

export default {
    computed:{
        ...mapState({
            model:'app'
        })
    },
    components:{
        'c-header':header,
        'c-footer':footer,
        sidebar
    }
} 
</script>
<style lang="sass" scoped>
    #app{height:100%;width:100%;}
    .container{
        height:100%;width:100%;
        overflow:hidden;
        display:flex;
        flex-direction:column;
        background-color:#EBEBEB;
    }
    .top-fixed{
        
    }
    .body{
        flex:1;
        overflow:auto;
        padding-bottom:20px;        
    }
    .bottom-fixed{
        border-top: 1px solid #E7E7E7;
    }
</style>