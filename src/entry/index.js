import Vue from 'vue';
import Fragment from 'vue-fragment';

import App from '../views/index.vue';

Vue.use(Fragment.Plugin)

new Vue({
    el: "#app",
    render: h => h(App)
});