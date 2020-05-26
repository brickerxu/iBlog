import Vue from 'vue';
import Fragment from 'vue-fragment';
import {Button} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import App from '../../views/admin/index.vue';

Vue.use(Fragment.Plugin);
Vue.use(Button);

new Vue({
    el: "#app",
    render: h => h(App)
});