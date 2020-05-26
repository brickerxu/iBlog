<template>
  <div class="navigation">
    <div class="logo-box">
      <img src="/static/logo.png">
      <div class="name"><slot name="name" ></slot></div>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
  export default {
    name: "BaseNavigation",
  };
</script>

<style lang="stylus" scoped>
@import '../../styles/global.styl';
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
  img 
    height 100%
  .name
    margin auto 1rem
</style>