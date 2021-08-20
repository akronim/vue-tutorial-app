import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";

Vue.config.productionTip = false;

// REGISTERING COMPONENTS GLOBALLY
// import ChildComponent from "./components/Child";
// Vue.component("child-component", ChildComponent);

// creating a global filter
Vue.filter("currency", (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value)
);

// DEFINING A GLOBAL ERROR HANDLER
// deal with errors that are not dealt with by the components in the application
// you won’t be able to do anything especially useful to recover from the situation
Vue.config.errorHandler = function(error, component, source) {
  console.log(`Global Error Handler: ${error}, ${component}, ${source}`);
};

// this
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
