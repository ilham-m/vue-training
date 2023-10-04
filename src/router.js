import Vue from 'vue';
import VueRouter from 'vue-router'
import PersonInput from './page/PersonInput.vue'
import HelloWorldVue from './components/HelloWorld.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  { path: '/PersonInput', component: PersonInput },
  { path: '/Home', component: HelloWorldVue, props:{msg:"Ini Home"} },
];

export default new VueRouter({
  routes,
});
