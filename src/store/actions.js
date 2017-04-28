// 2做什么
import *as types from './types';
export  default {
    increment: function ({commit}) { //普通函数弱爆了
        commit(types.INCREMENT);
    },
    decrement: ({commit}) => {  //推荐箭头函数
        commit(types.DECREMENT);
    },
    clickodd: ({commit, state}) => {
        if (state.mutations.count % 2 === 0) {
            commit(types.CLICKODD);
        }
    },
    clickasync: ({commit}) => {
        new Promise((resolve) => { //es6异步语法
            setTimeout(function () {
                commit(types.CLICKASYNC);
            }, 1000)
        })
    },
    showHeader: ({commit}) => {
        commit(types.SHOWHEADER);
    },
    hideHeader: ({commit}) => {
        commit(types.HIDEHEADER);
    },
    showLoading: ({commit}) => {
        commit(types.SHOWLOADING);
    },
    hideLoading: ({commit}) => {
        commit(types.HIDELOADING);
    },
}