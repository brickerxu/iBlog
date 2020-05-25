import Vue from 'vue';
import Fragment from 'vue-fragment';
import {Input, Button, Checkbox} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import App from '../views/login.vue';

Vue.use(Fragment.Plugin);
Vue.use(Input);
Vue.use(Button);
Vue.use(Checkbox);

new Vue({
    el: "#app",
    render: h => h(App)
});