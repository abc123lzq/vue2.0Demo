<template>
    <div id="article">
        <div class="goback">
            <input type="button" value="返回" onclick="window.history.go(-1);">
        </div>
        <div class="content">
            <h2><img class="img-show" :src="articleData.author_face" alt=""></h2>
        </div>
        <div class="cont">
            <h3>{{articleData.title}}</h3>
            <div class="time">
                <span>{{articleData.time | normalTime}}</span>
                <img src="../../../assets/img/zan.png" alt="">
            </div>
            <div class="text-box" v-html="articleData.content"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
                articleData: []
            };
        },
        mounted(){
            //正则获取路由字符串最后的id
            var reg = /\/article\/(\d+)/;
            var id = this.$route.path.match(reg)[1];
            console.log(id);
            this.fetchData(id);
        },
        methods: {
            fetchData(id){
                var that = this;
                this.$http.get('src/data/article.data').then((res) => {
                    that.articleData = res.data[id];
                }, (err) => {
                    console.log(err);
                })

            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped="">
    #article
        width: 100%;
        margin-top: 50px
        .goback
            width: 100%;
            input
                background-color: red
                color: floralwhite;
                width: 100%;
                padding: 20px 0;
        .content
            width: 100%;
            .img-show
                width: 40%;
                height: auto;
        .cont
            .time
                margin: 20px 0;
</style>