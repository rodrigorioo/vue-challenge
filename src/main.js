// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Vue
import Vue from "vue";
import router from "./router";

import store from "./store";

// Init app
Vue.component('app', require('./components/App.vue').default);

new Vue({
    router,
    store,
    el: '#app',
});
