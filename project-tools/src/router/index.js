import Vue from "vue";
import VueRouter from "vue-router";

import L4Display from "../components/Display";
import L4Example_1 from "../components/Example_1";
import L4Home from "../views/Home";

Vue.use(VueRouter);
// {}
export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: null },
    {
      path: "/l4",
      component: L4Display,
      children: [
        {
          path: "/l4/e1",
          component: L4Example_1,
          children: [
            { path: "/l4/e1/Home", component: L4Home },
            {
              path: "/l4/e1/About",
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () =>
                import(/* webpackChunkName: "about" */ "../views/About"),
            },
          ],
        },
      ],
    },
    // catchall route
    { path: "*", redirect: "/" },
  ],
});

// we enable routing features in main.js and add it in App.vue
