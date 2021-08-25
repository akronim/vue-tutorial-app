import Vue from "vue";
import VueRouter from "vue-router";
import ProductDisplay from "../components/ProductDisplay";
import ProductEditor from "../components/ProductEditor";

import Preferences from "../components/Preferences";
import Products from "../components/Products";

import SideBySide from "../components/SideBySide";

Vue.use(VueRouter);

export default new VueRouter({
  // This mode uses the History API for routing, which offers the most natural
  // URLs but is not supported by older browsers.
  mode: "history",
  // the "routes" property is used to define mappings between URLs and components
  routes: [
    { path: "/preferences", component: Preferences },
    {
      path: "/products",
      component: Products,
      // - the Product component’s template also contains a router-view
      // element for which a component must be selected and that is
      // the purpose of the children property that this route defines
      // - the value of each child route’s path property is combined with
      // the path of its parent
      children: [
        { name: "table", path: "list", component: ProductDisplay },
        {
          name: "editor",
          path: ":op(create|edit)/:id(\\d+)?",
          component: ProductEditor,
        },
        { path: "", redirect: "list" },
      ],
    },
    // When the set of URLs supported by an existing application changes,
    // it is important to ensure that you either update the URLs used in
    // components or create redirections or aliases between
    // the old and new URLs.
    { path: "/edit/:id", redirect: (to) => `/products/edit/${to.params.id}` },

    // Using Named Router-View Elements
    // The "components" property is used when defining routes that target
    // named router-view elements. This property is assigned an object whose
    // properties are the names of the router-view elements and whose values
    // are the component that should be displayed
    {
      path: "/named",
      component: SideBySide,
      children: [
        {
          path: "tableleft",
          components: {
            left: ProductDisplay,
            right: ProductEditor,
          },
        },
        {
          path: "tableright",
          components: {
            left: ProductEditor,
            right: ProductDisplay,
          },
        },
      ],
    },

    { path: "*", redirect: "/products/list" },
  ],
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
