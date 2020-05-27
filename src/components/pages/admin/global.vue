<template>
    <empty>
        <div class="header">
            <navigation-top />
        </div>
        <div class="content">
            <div class="left">
                <navigation-left />
            </div>
            <div class="right">
                <slot></slot>
            </div>
        </div>
    </empty>
</template>

<script>
import Empty from '../empty.vue';
import NavigationTop from '../../navigation/admin/navigation-top.vue';
import NavigationLeft from '../../navigation/admin/navigation-left.vue';
export default {
    name: 'Global',
    components: {
        Empty,
        NavigationTop,
        NavigationLeft
    }
}
</script>

<style lang="stylus" scoped>
    @import '../../../styles/global.styl';
    .header
        position fixed
        width 100%
        z-index 1
    .content
        display flex
        top 64px
        position fixed
        height calc(100% - 96px)
        width 100%
    .right
        margin-left 150px
        width 100%
</style>