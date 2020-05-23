<template>
  <div class="navigation">
    <div class="logo-box">
      <img src="static/logo.png">
      <div class="name">个人博客</div>
    </div>
    <ul>
      <li><a>首页</a></li>
      <li><a>笔记</a></li>
      <li><a>资源</a></li>
      <li><a>书屋</a></li>
      <li><a>关于我</a></li>
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
    background-color #363636
    color #ffffff
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
            color #00c4ff
  .logo-box
    height 65px
    display flex
    img 
      height 100%
    .name
      margin auto 1rem
</style>