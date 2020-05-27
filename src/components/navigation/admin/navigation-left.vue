<template>
<div class="navigation">
    <ul class="menu">
        <li v-for="(item, index) in menu" :key="index" class="menu-item" v-on:click="clickMenu(item)">
            <div class="menu-title">
                <i v-if="item.icon" :class="item.icon"></i>
                <span>{{item.text}}</span>
            </div>
            <ul style="display:none" v-if="item.sub">
                <li v-for="(subItem, subIndex) in item.sub" :key="subIndex" class="submenu-item">
                    <span>{{subItem.text}}</span>
                </li>
            </ul>
        </li>
    </ul>
</div>
</template>

<script>
  export default {
    name: "NavigationLeft",
    data() {
        return {
            menu: [
                {
                    key: "article",
                    text: "文章管理",
                    icon: "el-icon-collection"
                }, {
                    key: "type",
                    text: "类别管理",
                    icon: "el-icon-menu",
                    sub: [
                        {
                            text: "子项1"
                        }, {
                            text: "子项2"
                        }
                    ]
                }, {
                    key: "resource",
                    text: "资源管理",
                    icon: "el-icon-files"
                }, {
                    // 前台导航管理
                    key: "navigation", 
                    text: "导航管理",
                    icon: "el-icon-s-grid"
                }
            ]
        }
    },
    methods: {
        clickMenu: item => {
            alert(JSON.stringify(item))
        }
    }
  };
</script>

<style lang="stylus" scoped>
@import '../../../styles/global.styl';
.navigation
    width 150px
    background-color $theme-colour
    position fixed
    height 100%
    color #fff
.menu-title
    cursor pointer
    line-height 56px
    padding 0 20px
    &:hover
        background-color #797979
ul
    padding 0
    margin 0
li
    list-style none
</style>