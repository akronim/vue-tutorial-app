import Vue from 'vue'
import App from './App.vue'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { RestDataSource } from "./restDataSource";
import store from "./store/index";

// enabling the routing configuration
import router from "./router";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    // Creating an Event Bus Service
    // an object that can be used to send and receive custom Vue.js 
    // events programmatically without relying on the application’s
    // hierarchy of components
    eventBus: new Vue()
  },
  // will be available in all components as the special variable $store
  store,
  // enabling the routing configuration
  router,
  provide: function () {
    return {
      // services will be available for use by all the components
      eventBus: this.eventBus,
      restDataSource: new RestDataSource(this.eventBus)
    }
  }
}).$mount('#app')
