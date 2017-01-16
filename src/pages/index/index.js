import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import store from './vuex/store';
import 'static/css/normalize.css';
//import 'static/css/font-awesome.min.css';
import 'static/css/site.css';
import App from './app.vue';
import home from './widget/home/home.vue';
//import Trend from './widget/trend/trend';
// import Article from './widget/article/article';
// import Notfound from './widget/error/notfound';

Vue.use(VueRouter);

// const Trend = resolve => {
//     require.ensure(['./widget/trend/trend.vue'],() => {
//         resolve(require('./widget/trend/trend.vue'));
//     },'trend')
// };

// const Article = resolve => {
//     require.ensure(['./widget/article/article.vue'],() => {
//         resolve(require('./widget/article/article.vue'));
//     },'artilce')
// };

// const Notfound = resolve => {
//     require.ensure(['./widget/error/notfound.vue'],() => {
//         resolve(require('./widget/error/notfound.vue'));
//     },'notfound')
// };

const router = new VueRouter({
    mode:'hash',
    routes: [
        { path: '/', component: home }
        // { path: '/p/:article_id', component: Article, name:'article'},
        // { path: '/error/notfound', component: Notfound },
        // { path: '/:type/:cate', component: Trend},
        // { path: '/', redirect: '/hot/now'},
        // { path: '*', redirect: '/error/notfound'}
    ]
});

// const App = new Vue({
//     router,
//     store,
//     template:`
//        <div id="app" class="row-fluid">
//             <router-view></router-view>
//             <c-footer></c-footer>
//        </div>
//     `,
//     components:{
//         'c-footer': footer
//     }
// });

sync(store, router);

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})

//app.$mount('#app');