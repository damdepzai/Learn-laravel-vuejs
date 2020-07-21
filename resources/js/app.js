// Axios & Echo global
require('./bootstrap');

/* Core */
import Vue from 'vue'
import Buefy from 'buefy'
import Bulma from 'bulma'

import SimpleVueValidation from 'simple-vue-validator';
Vue.use(SimpleVueValidation);

/* Router & Store */
import router from './router'
import store from './store'

/* Vue. Main component */
import App from './App.vue'

/* Vue. Component in recursion */
import AsideMenuList from '@/components/AsideMenuList'

/* Collapse mobile aside menu on route change */
router.afterEach(() => {
  store.commit('asideMobileStateToggle', false)
})

Vue.config.productionTip = false

/* These components are used in recursion algorithm */
Vue.component('AsideMenuList', AsideMenuList)

/* Main component */
Vue.component('App', App)

/* Buefy */
Vue.use(Buefy)
Vue.use(Bulma)

/* This is main entry point */
window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }

  emit(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
  destroy(event,callback){
    this.vue.$off(event, callback);
  }
};
// var Validator = SimpleVueValidation.Validator;
Vue.mixin({
  methods: {
    // Validator
  }})

new Vue({
  store,
  router,
  render: h => h(App),
  mounted() {
    document.documentElement.classList.remove('has-spinner-active')
  }
}).$mount('#app')
