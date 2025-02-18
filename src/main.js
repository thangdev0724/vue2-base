import Vue from 'vue'
import App from './App.vue'
import { getStore } from './stores'
import i18n from '@/plugins/vue-i18n'
import router from './routers/router'

import '@/assets/scss/vendors/bootstrap-vue/index.scss';
import '@/assets/scss/common.scss';

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  store: getStore(),
  router,
  i18n
}).$mount('#app')
