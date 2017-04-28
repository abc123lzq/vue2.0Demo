// 4.如果有需要数据导出让模板引用
export default {
    //数据引用名
    count: (state) => {
        return state.count;
    },
    getOdd(state){
        return state.count % 2 === 0 ? '偶数' : '奇数'
    },
    headerShow: (state) => {
        return state.header;
    },
    loadingShow: (state) => {
        return state.loading;
    },
}
