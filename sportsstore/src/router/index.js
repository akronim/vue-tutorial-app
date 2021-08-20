import Vue from "vue";
import VueRouter from "vue-router";

import Store from "../components/Store";
import ShoppingCart from "../components/ShoppingCart";
import Checkout from "../components/Checkout";
import OrderThanks from "../components/OrderThanks";
// DEV
// import Authentication from "../components/admin/Authentication";
// import Admin from "../components/admin/Admin";
// import ProductAdmin from "../components/admin/ProductAdmin";
// import OrderAdmin from "../components/admin/OrderAdmin";
// import ProductEditor from "../components/admin/ProductEditor";

// PROD
// Vue.js makes it easy to brek the application into separate bundles that can be
// loded only when they are first required
// Normal import statements create a static dependency on a module
// These components will be put into a separate JS file that is loaded first time
// any of these are required. This ensures that the features are available for
// the small number of users who require them, but are not downloaded by the rest
// of users
// Comments ensure that the components are packaged into a single separate file
const Authentication = () =>
  import(/* webpackChunkName: "admin" */ "../components/admin/Authentication");
const Admin = () =>
  import(/* webpackChunkName: "admin" */ "../components/admin/Admin");
const ProductAdmin = () =>
  import(/* webpackChunkName: "admin" */ "../components/admin/ProductAdmin");
const OrderAdmin = () =>
  import(/* webpackChunkName: "admin" */ "../components/admin/OrderAdmin");
const ProductEditor = () =>
  import(/* webpackChunkName: "admin" */ "../components/admin/ProductEditor");

// import statement to access the data store, through which I can read
// the value of the state
// mapState and $store can only be used in components
import dataStore from "../store";

Vue.use(VueRouter);

export default new VueRouter({
  // "history": to use a recent browser API to handle the URLs
  mode: "history",
  routes: [
    { path: "/", component: Store },
    { path: "/cart", component: ShoppingCart },
    { path: "/checkout", component: Checkout },
    { path: "/thanks/:id", component: OrderThanks },
    { path: "/login", component: Authentication },
    {
      path: "/admin",
      component: Admin,
      // will prevent navigation if the user hasn't been authenticated
      beforeEnter(to, from, next) {
        if (dataStore.state.auth.authenticated) {
          next();
        } else {
          next("/login");
        }
      },
      // this allows nested router-view elements to be used
      children: [
        {
          // /admin/products/create
          // /admin/products/edit/id
          path: "products/:op(create|edit)/:id(\\d+)?",
          component: ProductEditor,
        },
        { path: "products", component: ProductAdmin },
        { path: "orders", component: OrderAdmin },
        { path: "", redirect: "/admin/products" },
      ],
    },
    // catchall route
    { path: "*", redirect: "/" },
  ],
});

// we enable routing features in main.js and add it in App.vue
