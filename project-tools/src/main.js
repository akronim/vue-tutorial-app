import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// Babel is used to transform this JS code
let first = "Hello";
const second = "World";
console.log(`Message ${first},${second}`);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
