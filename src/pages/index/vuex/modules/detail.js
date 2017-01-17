import {FETCH_DETAIL_SUCCESS} from '../mutation-types';

const state = {
    film:{cover:{}}
}

const mutations = {
    [FETCH_DETAIL_SUCCESS](state, payLoad) {
        state.film = payLoad.film;
    }
};

export default {
    state: state,
    mutations: mutations
}