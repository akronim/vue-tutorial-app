import Vue from "vue";
import VueRouter from "vue-router";

import L9Content from "../components/Content";
import L9Example_1 from "../components/Example_1";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: null },
    { path: "/l9", component: L9Content },
    { path: "/l9/e1", component: L9Example_1 },
    // catchall route
    { path: "*", redirect: "/" },
  ],
});

// we enable routing features in main.js and add it in App.vue
