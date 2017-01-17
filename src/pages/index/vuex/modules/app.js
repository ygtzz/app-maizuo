import {START_LOADING,FINISH_LOADING,CHANGE_LEFTNAV_STATE} from '../mutation-types';

const state = {
    bLoading:false,    
    bShowSideBar:false
}

const mutations = {
    [START_LOADING](state){
        state.bLoading = true;
    },
    [FINISH_LOADING](state){
        state.bLoading = false;
    },
    [CHANGE_LEFTNAV_STATE](state, payLoad) {
        state.bShowSideBar = !state.bShowSideBar;
    }
};

export default {
    state: state,
    mutations: mutations
}