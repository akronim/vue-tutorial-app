<template>
  <div class="container-fluid">
    <!-- error-display element -->
    <div class="row">
      <div class="col">
        <error-display />
      </div>
    </div>

    <div class="col">
      <div class="col text-center m-2">
        <button class="btn btn-primary" v-on:click="selectComponent('table')">Standard Features</button>
        <button class="btn btn-success" v-on:click="selectComponent('summary')">Advanced Features</button>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <!-- 
          Vue.js supports a special attribute (is) on HTML elements to specify 
          the component whose content will be used to replace that element 
          when the application is running.
        -->
        <component v-bind:is="selectedComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDisplay from "./ProductDisplay";
import ProductEditor from "./ProductEditor";
import ErrorDisplay from "./ErrorDisplay";
import LoadingMessage from "./LoadingMessage";

// this is a component that should be loaded only when it is required
// creates a dynamic dependency, which webpack
// handles by putting the component in its own bundle
// each asynchronous component will be put into its own file
const DataSummary = () => ({
  component: import("./DataSummary"),
  loading: LoadingMessage,
  delay: 100,
});

// you can group related components so they are all loaded the first time
// that any of them is required
// const DataSummary = () => ({
//     component:
//         import(/* webpackChunkName: "advanced" */ "./components/DataSummary"),
//     loading: LoadingMessage,
//     delay: 100
// });

import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  components: { ProductDisplay, ProductEditor, ErrorDisplay, DataSummary },
  // App component will responsible for getting the initial data
  // from the web service
  created() {
    //  Vuex dispatch method to invoke the action called getProductsAction
    this.$store.dispatch("getProductsAction");
  },
  methods: {
    ...mapMutations({
      selectComponent: "nav/selectComponent",
    }),
  },
  computed: {
    ...mapState({
      selected: (state) => state.nav.selected,
    }),

    selectedComponent() {
      switch (this.selected) {
        case "table":
          return ProductDisplay;
        case "editor":
          return ProductEditor;
        case "summary":
          return DataSummary;
        default:
          return ProductDisplay;
      }
    },
  },
};
</script>