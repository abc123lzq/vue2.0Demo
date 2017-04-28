// 1.引入
import Home from './components/Home.vue';
import Follow from './components/page/Follow/Follow.vue';
import Column from './components/page/Column/Column.vue';
import Userinfo from './components/page/Userinfo/Userinfo.vue';
import Article from './components/page/Article/Article.vue';
import Communication from './components/page/Communication/Communication.vue';
import Baiduserch from './components/page/Baiduserch/Baiduserch.vue';
// 2.设置
export default [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/follow',
        component: Follow
    },
    {
        path: '/column',
        component: Column
    },
    {
        path: '/userinfo',
        component: Userinfo
    },
    {
        path: '/article/:id', //id加：表示参数
        component: Article
    },
    {
        path: '/communication',
        component: Communication
    },
    {
        path: '/baiduserch',
        component: Baiduserch
    },

    {
        path: '*',  //重定向开发环境我们是用node.js做后台所以可以正常运行。
        component: Home
    },
];
