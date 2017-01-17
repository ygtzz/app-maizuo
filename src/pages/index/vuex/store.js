import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import app from './modules/app';
import detail from './modules/detail';
import * as getters from './getters'
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    getters,
    modules:{
        app,
        home,
        detail
    }
});