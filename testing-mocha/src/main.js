import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import i18n from '@/plugins/i18n'

import App from './App.vue'
import router from './router.js'
import store from './store/index.js'

Vue.use(VueCompositionApi)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
