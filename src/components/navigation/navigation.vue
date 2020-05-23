<template>
  <div class="navigation">
    <div class="logo-box">
      <img src="static/logo.png">
    </div>
    <ul>
      <li><a>首页</a></li>
      <li><a>资源</a></li>
      <li><a>关于</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Navigation",
  };
</script>

<style lang="stylus" scoped>
  @import '../../styles/global.styl';
  .navigation
    border-bottom .5px solid #9c9c9c
    height 64px
    font-size 20px
    background-color #ffffff
    padding 0 $padding-left-right
    display flex
    justify-content space-between
    ul
      li
        display inline
        list-style-type none
        a
          padding 20px 35px 17px 35px
          cursor pointer
          &:hover
            background-color #eaeaea
  .logo-box
    height 60px
    width 60px
    img 
      width 100%
</style>