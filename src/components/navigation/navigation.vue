<template>
  <base-navigation>
    <span slot="name">个人编程</span>
    <ul slot="right">
      <li><a>首页</a></li>
      <li><a>笔记</a></li>
      <li><a>资源</a></li>
      <li><a>书屋</a></li>
      <li><a>关于我</a></li>
    </ul>
  </base-navigation>
</template>

<script>
import BaseNavigation from './base-navigation.vue';
export default {
  name: "Navigation",
  components: {
    BaseNavigation
  }
};
</script>

<style lang="stylus" scoped>
ul
  li
    display inline
    list-style-type none
    a
      padding 20px 35px 17px 35px
      cursor pointer
      &:hover
        color #00c4ff
</style>