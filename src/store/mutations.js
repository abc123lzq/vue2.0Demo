// 3怎么做
import {
    INCREMENT,
    DECREMENT,
    CLICKODD,
    CLICKASYNC,
    SHOWHEADER,
    HIDEHEADER,
    SHOWLOADING,
    HIDELOADING,
} from './types';
import getters from './getters';

const state = {
    count: 20,
    header: true,
    loading:true,
};

const mutations = {
    [INCREMENT](state){ //变量用中括号
        state.count++;
    },
    [DECREMENT](state){
        state.count--;
    },
    [CLICKODD](state){
        state.count++;
    },
    [CLICKASYNC](state){
        state.count++;
    },
    [SHOWHEADER](state){
        state.header = true;
    },
    [HIDEHEADER](state){
        state.header = false;
    },
    [SHOWLOADING](state){
        state.loading = true;
    },
    [HIDELOADING](state){
        state.loading = false;
    }

};

export default {
    state,
    mutations,
    getters
};