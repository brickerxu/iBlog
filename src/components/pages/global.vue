<template>
    <div>
        <navigation />
        <div class="content">
            <slot></slot>
        </div>
    </div>
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
    .content
        padding-top 64px
</style>