import  LoadingComponent from './Loading.vue';

const Loading = {
    install: function (Vue) {  //install属性能对应使用vue.use()方法
        Vue.component('Loading', LoadingComponent)
    }
};

export default Loading;
