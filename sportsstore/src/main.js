import Vue from 'vue'
import App from './App.vue'

// this is where the top-level configuration of the Vue application is performed

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import store from "./store";
import router from "./router";
import Vuelidate from "vuelidate";

// creating a global filter
Vue.filter("currency", (value) => new Intl.NumberFormat("en-US",
  { style: "currency", currency: "USD" }).format(value));

Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
