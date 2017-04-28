<template>
    <div id="column">
        <h4>axios:后端数据交互</h4>
        <ul>
            <li v-for="item in moveData">
                <p><img :src="item.images.large" alt=""></p>
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
                moveData: [],
                moveTotal: '',
                start: 0,
                count: 10,
            }
        },
        mounted() //生命周期钩子
        {
            this.getDouPanApi();
            this.loadMore();
        },
        methods: {
            loadMore: function () {
                var that = this;
                $(window).scroll(function () {
                    var scrollTop = $(this).scrollTop();
                    var scrollHeight = $(document).height();
                    var windowHeight = $(this).height();
                    if (scrollTop + windowHeight == scrollHeight) {
                        if (that.start > that.moveTotal || that.start != 0) {
                            return
                        } else {
                            that.start += 10;
                            that.getDouPanApi();
                        }
                    }
                })
            },
            getDouPanApi: function () {
                console.log('豆瓣偷偷加载中...');
                var that = this;
                // 代理api
                var dailiUrl = 'https://bird.ioliu.cn/v1/?url=';
                this.$http.post(dailiUrl + 'https://api.douban.com//v2/movie/in_theaters', {
                    start: that.start,
                    count: that.count
                }).then((res) => {
                    for (var i = 0; i < res.data.subjects.length; i++) {
                        that.moveTotal = res.data.total;
                        that.moveData.push(res.data.subjects[i]);
                    }
                }).catch(function (err) {
                    console.log('注意该接口一分钟只能40次请求，超过请等待xx分钟O(∩_∩)O哈哈~!' + err);
                });
            }
        },
    }
    ;
</script>

<style>
    #column {
        color: #999;
        width: 100%;
        text-align: center;
        font-size: 18px;
        margin-top: 50px;
    }

    #column input {
        background-color: #fff;
    }

    #column ul {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 60px;
    }

    #column ul li p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 84.3%;

    }

    #column ul li {
        text-align: center;
        list-style: none;
        /*border: 1px solid #ccc;*/
        width: 30%;
        margin-left: 2.1%;
        margin-top: 10px;
        font-size: 12px;
        color: #666666;
        height: 3.2rem;
        overflow: hidden;
    }

    #column ul li img {
        width: 100%;
        height: auto;
    }
</style>