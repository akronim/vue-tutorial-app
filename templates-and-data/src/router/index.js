import Vue from "vue";
import VueRouter from "vue-router";

import L1Display from "../components/L1Display.vue";
import Example_1 from "../components/Example_1";
import Example_2 from "../components/Example_2";
import Example_3 from "../components/Example_3";
import Example_4 from "../components/Example_4";
import Example_5 from "../components/Example_5";
import Example_6 from "../components/Example_6";
import Example_7 from "../components/Example_7";
import Example_8 from "../components/Example_8";
import Example_9 from "../components/Example_9";
import Example_10 from "../components/Example_10";
import Example_11 from "../components/Example_11";
import Example_12 from "../components/Example_12";
import Example_13 from "../components/Example_13";
import Example_14 from "../components/Example_14";
import Example_15 from "../components/Example_15";
import Example_16 from "../components/Example_16";
import Example_17 from "../components/Example_17";
import Example_18 from "../components/Example_18";
import Example_19 from "../components/Example_19";
import Example_20 from "../components/Example_20";
import Example_21 from "../components/Example_21";
import Example_22 from "../components/Example_22";
import Example_23 from "../components/Example_23";
import Example_24 from "../components/Example_24";
import Example_25 from "../components/Example_25";
import Example_26 from "../components/Example_26";
import Example_27 from "../components/Example_27";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/l1",
      component: L1Display,
      children: [
        { path: "/l1/e1", component: Example_1 },
        { path: "/l1/e2", component: Example_2 },
        { path: "/l1/e3", component: Example_3 },
        { path: "/l1/e4", component: Example_4 },
        { path: "/l1/e5", component: Example_5 },
        { path: "/l1/e6", component: Example_6 },
        { path: "/l1/e7", component: Example_7 },
        { path: "/l1/e8", component: Example_8 },
        { path: "/l1/e9", component: Example_9 },
        { path: "/l1/e10", component: Example_10 },
        { path: "/l1/e11", component: Example_11 },
        { path: "/l1/e12", component: Example_12 },
        { path: "/l1/e13", component: Example_13 },
        { path: "/l1/e14", component: Example_14 },
        { path: "/l1/e15", component: Example_15 },
        { path: "/l1/e16", component: Example_16 },
        { path: "/l1/e17", component: Example_17 },
        { path: "/l1/e18", component: Example_18 },
        { path: "/l1/e19", component: Example_19 },
        { path: "/l1/e20", component: Example_20 },
        { path: "/l1/e21", component: Example_21 },
        { path: "/l1/e22", component: Example_22 },
        { path: "/l1/e23", component: Example_23 },
        { path: "/l1/e24", component: Example_24 },
        { path: "/l1/e25", component: Example_25 },
        { path: "/l1/e26", component: Example_26 },
        { path: "/l1/e27", component: Example_27 },
      ],
    },

    // catchall route
    { path: "*", redirect: "/l1" },
  ],
});

// we enable routing features in main.js and add it in App.vue
