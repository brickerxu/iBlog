<template>
  <div class="navigation">
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
  .navigation
    border-bottom .5px solid #9c9c9c
    height 64px
    font-size 18px
    position fixed
    width 100%
    z-index 1
    background-color #ffffff
    ul
      float right
      margin 0 auto
      padding 20px 0
      li
        display inline
        list-style-type none
        a
          padding 20px 35px
          cursor pointer
          &:hover
            background-color #eaeaea
</style>