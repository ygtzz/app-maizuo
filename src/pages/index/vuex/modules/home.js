import {FETCH_COMING_SOON_SUCCESS,FETCH_NOW_PLAYING_SUCCESS,FETCH_BANNER_SUCCESS,START_LOADING,FINISH_LOADING} from '../mutation-types';

var state = {
    aBanner:[],
    aNowPlaying:[],
    aComingSoon:[]
}

var mutations = {
    [START_LOADING](){

    },
    [FINISH_LOADING](){

    },
    [FETCH_BANNER_SUCCESS](state, payLoad) {
        console.log(payLoad)
    },
    [FETCH_NOW_PLAYING_SUCCESS](state, payLoad) {
        console.log(payLoad)
    },
    [FETCH_COMING_SOON_SUCCESS](state, payLoad) {
        console.log(payLoad)
    }
};

export default {
    state: state,
    mutations: mutations
}