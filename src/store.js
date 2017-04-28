//这个文件是vuex整合版的不用只是展示，因为阅读性差我们用分割
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {  //自定义数据
    count: 10
};
const mutations = {
    increment(state){ //2. 处理数据变化
        state.count++;
    },
    decrement(){
        state.count--;
    },
};
const actions = {
    increment: ({commit}) => {  //1. 处理你要做什么
        commit('increment')
    },
    decrement: ({commit}) => { //箭头函数
        commit('decrement')
    },
    clickodd: ({commit, state}) => {  //普通函数都可以
        if (state.count % 2 === 0) {  //是偶数我才提交commit去执行mutations
            commit('increment')
        }
    },
    clickasync: ({commit}) => {
        new Promise((resolve) => { //es6异步语法
            setTimeout(function () {
                commit('increment');
                resolve()
            }, 1000)
        })

    }
};
const getters = {  //获取数据
    count(state){
        return state.count;
    },
    getOdd(state){
        return state.count % 2 === 0 ? '偶数' : '奇数'
    }
};
//导出数据
export  default  new Vuex.Store({
    actions,
    state,
    mutations,
    getters
});