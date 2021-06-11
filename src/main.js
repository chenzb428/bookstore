import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/styles/resets.css';
import './assets/styles/common.css';

import { factPrice, currency, formatTime } from './libs/filters';

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.filter('factPrice', factPrice);
Vue.filter('currency', currency);
Vue.filter('currency', currency);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
