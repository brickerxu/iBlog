<template>
    <fragment>
        <div class="header">
            <navigation />
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </fragment>
</template>

<script>
    import Navigation from '../navigation/navigation.vue';
    import '../../styles/global.styl';
    export default {
        name: 'Global',
        components: {
            navigation: Navigation
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../styles/global.styl';
    .header
        position fixed
        width 100%
        z-index 1
    .content
        padding 64px $padding-left-right 0 $padding-left-right
</style>