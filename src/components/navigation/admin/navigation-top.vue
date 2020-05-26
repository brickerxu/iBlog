<template>
  <div class="navigation">
    <div class="logo-box">
      <img src="/static/logo.png">
      <div class="name">博客管理后台</div>
    </div>
    <div class="user_box">
        <div class="headimg_box">
            <img src="/static/logo.png">
        </div>
        <div><el-button type="text">退出</el-button></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navigation",
  };
</script>

<style lang="stylus" scoped>
@import '../../../styles/global.styl';
.navigation
    border-bottom .5px solid #9c9c9c
    height 64px
    font-size 20px
    background-color $theme-colour
    color #ffffff
    padding 0 $padding-left-right
    display flex
    justify-content space-between
.logo-box
    height 65px
    display flex
    .name
      margin auto 1rem
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