import Vue from 'vue';

import App from '../views/about.vue';

import '../styles/global.styl';

new Vue({
    el: "#app",
    render: h => h(App)
});