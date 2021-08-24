import Vue from "vue";
import VueRouter from "vue-router";

import L8Content from "../components/Content";
import L8Example_1 from "../components/Example_1";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: null },
    { path: "/l8", component: L8Content },
    { path: "/l8/e1", component: L8Example_1 },
    // catchall route
    { path: "*", redirect: "/" },
  ],
});

// we enable routing features in main.js and add it in App.vue
