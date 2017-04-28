<template>
    <div id="app">
        <Loading v-show="loadingShow"></Loading>
        <NavView v-show="headerShow"></NavView>
        <!--这个标签保存成功的缓存状态-->
        <!--<keep-alive>-->
        <transition name="slide-down">  <!--中间层我们用路由来显示 -->
            <router-view></router-view>
        </transition>
        <!--</keep-alive>-->
        <FooterView></FooterView>
    </div>
</template>

<script type="text/ecmascript-6">
    import NavView from './components/Nav.vue';
    import FooterView from './components/Footer.vue';
    //vuex靠谱的两功能
    import {mapGetters, mapActions} from 'vuex';
    export default{
        computed: mapGetters([  //把数据扔到计算属性里面让程序自己处理
            'headerShow',
            'loadingShow'
        ]),
        watch: { //浅度监听：当路由发生变化
            $route(to, from){
                if (to.path === '/userinfo') {
                    this.$store.dispatch('hideHeader')//dispatch指向了actions.js
                } else {
                    this.$store.dispatch('showHeader')
                }
            }
        },
        components: {
            NavView,
            FooterView
        }
    }
</script>

<style>
    /*css引入ccs文件用@import，js用*/
    @import "./assets/css/index.css";

    /*基本动画设置*/
    .slide-down-enter-active,
    .slide-down-leave-active {
        transition: .4s all ease;
        opacity: 0.6;
        transform: translate3d(0, 5em, 5em);
    }

    .slide-down-enter,
    .slide-down-leave {
        opacity: 1;
        transform: translate3d(0, 10em, 0);
    }

</style>