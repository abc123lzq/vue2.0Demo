<template>
    <div id="footer">
        <ul>
            <router-link to="/baiduserch" tag="li">
                <a href="">百度搜索</a>
            </router-link>
            <router-link to="/communication" tag="li">
                <a href="">通信</a>
            </router-link>
            <router-link to="/userinfo" tag="li">
                <a href="">用户信息</a>
            </router-link>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{}
</script>

<style scoped>
    #footer {
        width: 100%;
        line-height: 50px;
        height: 50px;
        background-color: black;
        position: fixed;
        bottom: 0;
    }

    #footer li {
        float: left;
        color: floralwhite;
        margin-left: 20%;
    }

    #footer li a {
        color: floralwhite;
    }
</style>