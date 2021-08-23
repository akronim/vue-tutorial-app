import Vue from "vue";
import VueRouter from "vue-router";

import L7Content from "../components/Content";
import L7Example_1 from "../components/Example_1";

Vue.use(VueRouter);
// {}
export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: null },
    { path: "/l7", component: L7Content },
    { path: "/l7/e1", component: L7Example_1 },
    // catchall route
    { path: "*", redirect: "/" },
  ],
});

// we enable routing features in main.js and add it in App.vue
