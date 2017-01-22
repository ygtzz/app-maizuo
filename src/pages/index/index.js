import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import store from './vuex/store';
import 'static/css/normalize.css';
import 'static/css/quick-layout.css';
import 'static/css/font-awesome.min.css';
import 'static/css/site.css';
import App from './app.vue';
import home from './widget/home/home.vue';
import detail from './widget/detail.vue';
import movie from './widget/movie/movie.vue';
import cinema from './widget/cinema.vue';
import query from './widget/maizuo-query.vue';
import my from './widget/my.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'hash',
    routes: [
        { path: '/', component: home ,name:'home'},
        { path: '/detail/:id', component: detail, name:'detail'},
        { path: '/movie', component: movie,name:'movie' },
        { path: '/my', component: my,name:'my'},
        { path: '/cinema', component: cinema,name:'cinema'},
        { path: '/query', component: query,name:'query'}
    ]
});

sync(store, router);

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
