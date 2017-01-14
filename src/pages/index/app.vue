<template>
    <div id="app" class="row-fluid">
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
    </div>
</template>
<script>
import header from 'widget/header/header.vue';
import footer from 'widget/footer/footer.vue';

export default {
    components:{
        'c-header':header,
        'c-footer':footer
    }
} 
</script>
<style lang="sass" scoped>
    html,body{height:100%;width:100%;}
    .row-fluid{height:100%;width:100%}
    .container{
        height:100%;width:100%;
        overflow:hidden;
        display:flex;
        flex-direction:column;
    }
    .top-fixed{
        
    }
    .body{
        flex:1;
        overflow:hidden;
        position:relative;
    }
    .bottom-fixed{

    }
</style>