<template>
    <empty>
        <div class="header">
            <navigation-top />
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </empty>
</template>

<script>
import Empty from '../empty.vue';
import NavigationTop from '../../navigation/admin/navigation-top.vue';
export default {
    name: 'Global',
    components: {
        Empty,
        NavigationTop
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
        padding 64px $padding-left-right 0 $padding-left-right
</style>