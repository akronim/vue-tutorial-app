import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  provide: function() {
    return {
      // Creating an Event Bus Service
      // an object that can be used to send and receive custom Vue.js
      // events programmatically without relying on the application’s
      // hierarchy of components
      // - one drawback of the event bus model is that you must ensure that event names
      // are unique within the application
      // - services will be available for use by all the components
      // - we use it in ProductDisplay.vue + ProductEditor.vue
      eventBus: new Vue(),
    };
  },
}).$mount("#app");
