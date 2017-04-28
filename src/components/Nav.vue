<template>
    <div id="nav">
        <ul>
            <router-link to="./home" tag="li">
                <a href="#">首页</a>
            </router-link>
            <router-link to="./follow" tag="li">
                <a href="#">vuex</a>
            </router-link>
            <router-link to="./column" tag="li">
                <a href="#">电影</a>
            </router-link>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{}
</script>

<style>
    #nav {
        width: 100%;
        line-height: 50px;
        height: 50px;
        background-color: black;
        position: fixed;
        top: 0
    }

    #nav li {
        float: left;

        margin-left: 20%;
    }

    #nav li a {
        color: floralwhite;
    }
</style>