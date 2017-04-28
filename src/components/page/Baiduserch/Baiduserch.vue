<template>
    <div class="searchContent">
        <h2>百度搜索api</h2><br>
        <input type="text" v-model="tl" @keyup="showData" v-focus>
        <div class="textConten" v-show="myData.length!=0">
            <ul>
                <li v-for="item in myData">{{item}}</li>
            </ul>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
                tl: '',
                myData: []
            }
        },
        methods: {
            showData(){
                var that = this;
                $.ajax({            //jsonp跨域请求
                    url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?",
                    data: {wd: that.tl, cb: "person"}, //核心传参
                    dataType: "jsonp",
                    jsonpCallback: "person",  //核心cb
                    success: function (data) {
                        that.myData = data.s;
                        console.log(that.myData);
                    }
                });
            },
        }
    }
</script>
<style>
    .searchContent {
        width: 100%;
        margin-top: 60px;
        text-align: center;
        height: 100vh;
    }

    .textConten {
        border: 1px solid #cccccc;
        background-color: #fff;
        width: 45.6%;
        margin-left: 27%;
    }

    .textConten ul {
        margin-top: 10px;
    }

    .textConten li {
        text-align: left;
        line-height: 20px;
    }
</style>