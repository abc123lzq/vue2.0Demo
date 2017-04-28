import Vue from 'vue'
import App from './App.vue';
// 1.引用第三方插件
import store from './store/index';
import VueRouter from 'vue-router';
import routerConfig from './router.config';
import axios from 'axios';
// 引用自定插件
import Loading from './components/customPlug/Loading/index'; //自定义插件
import filters from './fliters/index';//自定义过滤器
import directives from './directive/directives';//自定义指令

// 2.使用插件
Vue.use(VueRouter);
Vue.use(Loading);
//es6高深语法 自动选择对应的过滤器
Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key])
});
//3.配置插件
// axios
axios.interceptors.request.use(function (config) { //所有的只要有发送异步请求的时候把绑定在自定义插件loading的布尔值为true
    store.dispatch('showLoading');
    return config;
}, function (error) {
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) { //所有的异步请求回来，布尔值为false
    store.dispatch('hideLoading');
    return response;
}, function (error) {
    return Promise.reject(error);
});
//设置post头部信息
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios; //暴漏在原型连上（全局）
// router实例
const router = new VueRouter({
    mode: 'history', //切换路由模式，变成history模式,如果前段自己看打包的时候这个要去掉
    routes: routerConfig, //routes:等路由配置
    scrollBehavior: () => ({y: 0})//配置loading的位置
});
// vue实例
new Vue({
    el: '#app',
    store,
    router,//4.挂载插件
    render: h => h(App)
});
//js全局引入css文件require
require('./assets/css/base.css');//需要"css-loader"


