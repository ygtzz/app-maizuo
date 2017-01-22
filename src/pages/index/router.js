import home from './widget/home/home.vue';
import detail from './widget/detail.vue';
import movie from './widget/movie/movie.vue';
import cinema from './widget/cinema.vue';
import query from './widget/maizuo-query.vue';
import my from './widget/my.vue';

export default [
    { path: '/', component: home ,name:'home'},
    { path: '/detail/:id', component: detail, name:'detail'},
    { path: '/movie', component: movie,name:'movie' },
    { path: '/my', component: my,name:'my'},
    { path: '/cinema', component: cinema,name:'cinema'},
    { path: '/query', component: query,name:'query'}
];