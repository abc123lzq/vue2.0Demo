<template>
    <div id="bbb">
        <span>我是子组件</span>
        <br>
        <input class="send" type="button" value="发送给父组件" @click="send">
        <input class="send" type="button" value="获取父组件" @click="geter">
        <p style="color:blue;">{{msg3.b}}</p>
        <p style=" color:red;">通信获取：{{msg.a}}</p>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
                msg3: {b: '我是子组件数据'}
            }
        },
        props: ['msg'],
        methods: {
            geter(){
                console.log(this.msg);
                this.msg.a = '获取父数据并修改！'
            },
            send(){
                this.$emit('child-msg', this.msg3.b)
            }
        },

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #bbb
        border: 1px solid #dada;
        margin-top: 30%
        input
            color: white;
            padding:10px;

    .send
        background-color: #ea9f00;

</style>