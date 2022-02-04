import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/Home.vue').default },
    { path: '/form', component: require('./components/Forms/Form.vue').default }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

export default router;
