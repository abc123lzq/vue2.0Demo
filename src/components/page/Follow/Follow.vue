<template>
    <div id="follow">
        <h4>vuex:集中式管理数据</h4>
        <input type="button" value="Vuex增加" @click="increment">
        <input type="button" value="Vuex减少" @click="decrement">
        <input type="button" value="vuex偶数" @click="clickodd">
        <input type="button" value="vuex异步" @click="clickasync">
        <div>现在的数据：{{count}}，它是{{getOdd}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex';
    export default{
        computed: mapGetters([
            'count',   //数据引用名
            'getOdd'
        ]),
        methods: mapActions([
            'increment', //事件名
            'decrement',
            'clickodd',
            'clickasync'
        ])
    };
</script>

<style >
    #follow {
        margin-top: 50px;
        color: #f45212;
        width: 100%;
        text-align: center;
        font-size: 20px;
    }

    #follow input {
        background-color: #fff;
        padding:5px;
        color: #000;
        margin:10px 0;
    }
</style>