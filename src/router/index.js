import Vue from "vue";
import VueRouter from "vue-router";

import L1Display from "../components/L1TemplatesAndData/L1Display";
import Example_1 from "../components/L1TemplatesAndData/Example_1";
import Example_2 from "../components/L1TemplatesAndData/Example_2";
import Example_3 from "../components/L1TemplatesAndData/Example_3";
import Example_4 from "../components/L1TemplatesAndData/Example_4";
import Example_5 from "../components/L1TemplatesAndData/Example_5";
import Example_6 from "../components/L1TemplatesAndData/Example_6";
import Example_7 from "../components/L1TemplatesAndData/Example_7";
import Example_8 from "../components/L1TemplatesAndData/Example_8";
import Example_9 from "../components/L1TemplatesAndData/Example_9";
import Example_10 from "../components/L1TemplatesAndData/Example_10";
import Example_11 from "../components/L1TemplatesAndData/Example_11";
import Example_12 from "../components/L1TemplatesAndData/Example_12";
import Example_13 from "../components/L1TemplatesAndData/Example_13";
import Example_14 from "../components/L1TemplatesAndData/Example_14";
import Example_15 from "../components/L1TemplatesAndData/Example_15";
import Example_16 from "../components/L1TemplatesAndData/Example_16";
import Example_17 from "../components/L1TemplatesAndData/Example_17";
import Example_18 from "../components/L1TemplatesAndData/Example_18";
import Example_19 from "../components/L1TemplatesAndData/Example_19";
import Example_20 from "../components/L1TemplatesAndData/Example_20";
import Example_21 from "../components/L1TemplatesAndData/Example_21";
import Example_22 from "../components/L1TemplatesAndData/Example_22";
import Example_23 from "../components/L1TemplatesAndData/Example_23";
import Example_24 from "../components/L1TemplatesAndData/Example_24";
import Example_25 from "../components/L1TemplatesAndData/Example_25";
import Example_26 from "../components/L1TemplatesAndData/Example_26";
import Example_27 from "../components/L1TemplatesAndData/Example_27";

//
import L2Content from "../components/L2Lifecycles/Content";
import L2Example_1 from "../components/L2Lifecycles/Example_1";

//
import L3Content from "../components/L3Todo/Content";
import L3Example_1 from "../components/L3Todo/Example_1";

//
import L4Display from "../components/L4ProjectsTools/Display";
import L4Example_1 from "../components/L4ProjectsTools/Example_1";
import L4Home from "../views/L4/Home";

//
import L5Content from "../components/L5DI/Content";
import L5Example_1 from "../components/L5DI/Example_1";

//
import L6Content from "../components/L6_DI_EventBus/Content";
import L6Example_1 from "../components/L6_DI_EventBus/Example_1";

//
import L7Content from "../components/L7_RESTfulWebServices/Content";
import L7Example_1 from "../components/L7_RESTfulWebServices/Example_1";

//
import L8Content from "../components/L8_Vuex/Content";
import L8Example_1 from "../components/L8_Vuex/Example_1";

//
import L9Content from "../components/L9_Vuex&DynamicComponents/Content";
import L9Example_1 from "../components/L9_Vuex&DynamicComponents/Example_1";

Vue.use(VueRouter);
// {}
export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: null },
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
    //
    { path: "/l2", component: L2Content },
    { path: "/l2/e1", component: L2Example_1 },
    //
    { path: "/l3", component: L3Content },
    { path: "/l3/e1", component: L3Example_1 },
    //
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
                import(/* webpackChunkName: "about" */ "../views/L4/About"),
            },
          ],
        },
      ],
    },
    //
    { path: "/l5", component: L5Content },
    { path: "/l5/e1", component: L5Example_1 },
    //
    { path: "/l6", component: L6Content },
    { path: "/l6/e1", component: L6Example_1 },
    //
    { path: "/l7", component: L7Content },
    { path: "/l7/e1", component: L7Example_1 },
    //
    { path: "/l8", component: L8Content },
    { path: "/l8/e1", component: L8Example_1 },
    //
    { path: "/l9", component: L9Content },
    { path: "/l9/e1", component: L9Example_1 },
    // catchall route
    { path: "*", redirect: "/" },
  ],
});

// we enable routing features in main.js and add it in App.vue
