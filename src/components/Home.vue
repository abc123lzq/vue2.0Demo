<template>
    <div id="home">
        <SliderView></SliderView>
        <div class="newsList">
            <ul>
                <li v-for="(item,index) in arrList">
                    <!--to添加：变成属性路由才可以传参-->
                    <router-link :to="'/article/'+item.id">
                        <h2>{{index}}{{item.title}}</h2>
                        <p>{{item.detail}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import SliderView from './common/Slider.vue';
    export default{
        data(){
            return {
                arrList: []
            }
        },
        components: {
            SliderView
        },
        mounted(){
            this.fetchData()
        },
        methods: {
            fetchData(){
                var that = this;
                this.$http.get('src/data/index.data').then((res) => {
                    that.arrList = res.data;
                }, (err) => {
                    console.log(err);
                })
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus"> //stylus语法也是需要依赖loader
    #home
        color: red;
        width: 100%;
        text-align: center;
        margin-top: 50px;
        .banner
            height: 0.1rem;
        .sb
            color: deeppink;
        .newsList
            margin-top: 50px
            margin-bottom: 80px
</style>