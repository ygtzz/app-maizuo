import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import * as getters from './getters'
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    getters,
    modules:{
        home
    }
});