<template>
  <!-- example 7 -->
  <!-- v-bind can be used to set the value of any attribute -->
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <!-- set the value of a custom attribute that matches selectors
      defined in the style element-->
      <h3 v-bind:data-size-aha="size">Product: {{name}}</h3>
    </div>
    <button v-on:click="handleClick_7" class="btn btn-primary">Press Me</button>
  </div>
</template>

<script>
import Vue from "vue";

// global filter
Vue.filter("capitalize", (value) => {
  return value[0].toUpperCase() + value.slice(1);
});

// component's configuration object
export default {
  // The Vue DevTools browser extension uses the optional "name" property to show
  // the structure of the application
  name: "MyComponent",
  // a specific pattern must be followed to define data values for a component
  data: function () {
    return {
      // changing the value is automatically reflected throughout the application
      name: "Lifejacket",
      highlight_7: false,
    };
  },
  // - this property is used to generate values based on data properties
  // - you have to use this keyword to access the data properties
  computed: {
    size() {
      return this.highlight_7 ? "big" : "small";
    },
  },
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
    handleClick_7() {
      this.highlight_7 = !this.highlight_7;
    },
  },
  // functions used to format the result of an expression
  filters: {
    // functions used for filters cannot access the rest of component's data
    // filters are allowed to accept arguments
  },
};
</script>


<style>
[data-size-aha="big"] {
  font-size: 40pt;
}
[data-size-aha="small"] {
  font-size: 20pt;
}
</style>


