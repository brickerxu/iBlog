<template>
    <div>
        
        <navigation />
        {{chrenild}}
    </div>
</template>

<script>
    import Navigation from '../navigation/navigation.vue';
    import '../../styles/global.styl';
    export default {
        name: 'Global',
        components: {
            navigation: Navigation
        },
        props: {
            chrenild: Node
        }
    }
</script>