import {FETCH_COMING_SOON_SUCCESS,FETCH_NOW_PLAYING_SUCCESS,FETCH_BANNER_SUCCESS} from '../mutation-types';

const state = {
    aBanner:[],
    aNowPlaying:[],
    aComingSoon:[]
}

const mutations = {
    [FETCH_BANNER_SUCCESS](state, payLoad) {
        state.aBanner = payLoad.billboards;
    },
    [FETCH_NOW_PLAYING_SUCCESS](state, payLoad) {
        state.aNowPlaying = payLoad.films;
    },
    [FETCH_COMING_SOON_SUCCESS](state, payLoad) {
        state.aComingSoon = payLoad.films;
    }
};

export default {
    state: state,
    mutations: mutations
}