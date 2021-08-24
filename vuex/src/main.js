import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
import store from "./store";
import Notifications from "vue-notification";

// npm install json-server@0.12.1
// npm run json

// add the package that we will use to make HTTP requests
// Axios is a popular library for making HTTP requests in web applications.
// npm install axios@0.18.0

Vue.config.productionTip = false;

Vue.use(Notifications);

export const bus = new Vue();

new Vue({
  router,
  render: (h) => h(App),
  data: {
    // Creating an Event Bus Service
    // an object that can be used to send and receive custom Vue.js
    // events programmatically without relying on the application’s
    // hierarchy of components
    // - one drawback of the event bus model is that you must ensure that event names
    // are unique within the application

    eventBus: bus, //new Vue(),
  },
  // will be available in all components as the special variable $store
  store,
  provide: function() {
    // - services will be available for use by all the components
    return {
      eventBus: this.eventBus,
    };
  },
}).$mount("#app");
