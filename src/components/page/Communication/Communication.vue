<template id="aaa">
    <div class="parents">
        <span>我是父级---</span>
        <p v-red>{{msgData.a}}</p>
        <p style="color:blue;">{{msgData.c}}</p>
        <br>
        <CommChildren :msg="msgData" @child-msg="get"></CommChildren>
    </div>
</template>
<script type="text/ecmascript-6">
    import CommChildren from './childern/CommChildren.vue';
    export default{
        components: {
            CommChildren
        },
        data(){
            return {
                msgData: {
                    a: '我是父组件的数据',
                    c: '父数据1111'
                },
            }
        },
        methods: {
            get(msg){
                alert('父组件收到子组件发来的数据');
                msg = '父级修改子级数据';
                this.msgData.c = msg;
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .parents
        margin-top: 60px;
        line-height: 40px
        font-size: 20px;

</style>