import Vue from "vue";
import VueRouter from "vue-router";

import L6Content from "../components/Content";
import L6Example_1 from "../components/Example_1";

Vue.use(VueRouter);
// {}
export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: null },
    { path: "/l6", component: L6Content },
    { path: "/l6/e1", component: L6Example_1 },
    // catchall route
    { path: "*", redirect: "/" },
  ],
});

// we enable routing features in main.js and add it in App.vue
