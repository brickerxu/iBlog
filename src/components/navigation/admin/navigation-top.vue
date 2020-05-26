<template>
<base-navigation>
    <span slot="name">博客管理后台</span>
    <div slot="right" class="user_box">
        <div class="headimg_box">
            <img src="/static/logo.png">
        </div>
        <div>
            <el-button type="text">退出</el-button>
        </div>
    </div>
</base-navigation>
</template>

<script>
import BaseNavigation from '../base-navigation.vue';
export default {
    name: "NavigationTop",
    components: {
        BaseNavigation
    }
};
</script>

<style lang="stylus" scoped>
.user_box
    margin auto 0
    display flex
    div
        margin auto 0 auto 1rem
    .headimg_box
        width 45px
        height 45px
        border 1px solid #eeeeee
        border-radius 50%
        box-shadow 0 0 10px #ddd
        img
            border-radius 50%
img 
      height 100%
</style>