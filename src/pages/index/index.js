import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import store from './vuex/store';
import 'static/css/normalize.css';
//import 'static/css/font-awesome.min.css';
import 'static/css/site.css';
import App from './app.vue';
import home from './widget/home/home.vue';
import detail from './widget/detail.vue';
import movie from './widget/movie/movie.vue';

Vue.use(VueRouter);

// const Trend = resolve => {
//     require.ensure(['./widget/trend/trend.vue'],() => {
//         resolve(require('./widget/trend/trend.vue'));
//     },'trend')
// };

const router = new VueRouter({
    mode:'hash',
    routes: [
        { path: '/', component: home ,name:'home'},
        { path: '/detail/:id', component: detail, name:'detail'},
        { path: '/movie', component: movie,name:'movie' },
        // { path: '/:type/:cate', component: Trend},
        // { path: '/', redirect: '/hot/now'},
        // { path: '*', redirect: '/error/notfound'}
    ]
});

sync(store, router);

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
