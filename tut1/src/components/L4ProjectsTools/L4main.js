import Vue from "vue";
import App from "../../App";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "../../router";
import store from "../../store/L4/index";

const config = (function() {
  const run = () => {
    // Babel is used to transform this JS code
    let first = "Hello";
    const second = "World";
    console.log(`Message ${first},${second}`);

    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  };

  return {
    run: run,
  };
})();

export default config;
