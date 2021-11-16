import Vue from "vue";
import VueRouter from "vue-router";

import Content from "../components/Content";
import Example1 from "../components/Example_1";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: Content },
    { path: "/examples/e1", component: Example1 },
    // catchall route
    { path: "*", redirect: "/" },
  ],
});

// we enable routing features in main.js and add it in App.vue
