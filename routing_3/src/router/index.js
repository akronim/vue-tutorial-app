import Vue from "vue";
import VueRouter from "vue-router";

import BasicRoutes from "./basicRoutes";
import SideBySideRoutes from "./sideBySideRoutes";

Vue.use(VueRouter);

const router = new VueRouter({
  // This mode uses the History API for routing, which offers the most natural
  // URLs but is not supported by older browsers.
  mode: "history",
  // the "routes" property is used to define mappings between URLs and components
  routes: [
    // The basicRoutes.js file exports an array, which must be unpacked using
    // the spread operator
    ...BasicRoutes,
    SideBySideRoutes,
    { path: "*", redirect: "/products" },
  ],
});

export default router;

// Guarding a Route
// The global route guards are the most flexible type of guard because they can
// be used to intercept all navigation, but they are awkward to set up
router.beforeEach((to, from, next) => {
  if (to.path == "/preferences" && from.path.startsWith("/named")) {
    next(false);
  } else {
    next();
  }
});

// Redirecting the Navigation Request to Another URL
// router.beforeEach((to, from, next) => {
//     if (to.path == "/named/tableright") {
//         next("/products");
//     } else {
//         next();
//     }
// });

// If you want to redirect a navigation request to a named route, then you can
// pass an object that has a name property to the next function
// router.beforeEach((to, from, next) => {
//     if (to.path == "/named/tableright") {
//         next({ name: "editor", params: { op: "edit", id: 1 } });
//     } else {
//         next();
//     }
// });

// the global beforeResolve method is executed after all the other types of guard,
// which is a useful way to define a global guard as a final check after
// the route-specific guards have been checked
router.beforeResolve((to, from, next) => {
  if (to.path == "/named/tableright") {
    next({ name: "editor", params: { op: "edit", id: 1 } });
  } else {
    next();
  }
});

// enable and add the routing functionality to the application in the main.js

// App.vue
// The Vue Router uses the router-view element to display content
// <router-view></router-view>

// basic
// { path: "/create", component: ProductEditor },

// Navigating Programatically
// this.$router.push("/edit");
// for Named Routes : this.$router.push({name: "table"});

// Navigating Using HTML Elements
// <router-link to="/" class="btn btn-secondary">Cancel</router-link>

// checking a route's path
// if (this.$route.path == "/create")

// Using a Route Alias
// { path: "/", component: ProductDisplay, alias: "/list" },

// Creating a Catchall Route
// { path: "*", redirect: "/products/list" }

// Using a Dynamic Segment
// { path: "/edit/:id", component: ProductEditor },
// + : <router-link v-bind:to="'/edit/' +  p.id "
// + : let productId = this.$route.params.id;

// Using Regular Expressions
// { path: "/:op(create|edit)/:id(\\d+)?", component: ProductEditor },
// dynamic segment is called "op"
// "id" segment will match segments that consist of only one or more digits
// The "d" character has to be escaped with two backslashes
// "+" character specifies that the expression should match one or more digits
// Dynamic segments can be marked as optional using  the "?" character
// checking: if (this.$route.params.op == "create")

// Creating Named Routes
// name property is used to assign a name to a route
// {
//     name: "editor", path: "/:op(create|edit)/:id(\\d+)?",
//     component: ProductEditor
// }
// using:
// <router-link v-bind:to="{name: 'table'}"
// <router-link v-bind:to="{name: 'editor', params: { op: 'edit', id: p.id}}"
