<!-- components are defined with:
  1) template element
  2) script element
  3) style element
 -->

<template>
  <!-- routing system will be responsible for managing the content -->
  <!-- <router-view /> -->

  <div class="container-fluid">
    <div class="bg-primary p-4 text-white h3">{{message}}</div>
    <input class="form-control bg-light" placeholder="Type here..." v-on:keydown.ctrl="handleKey" />
    <input class="form-control bg-light" placeholder="Type here..." v-on:keydown.ctrl.exact="handleKey" />
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
      message: "Ready",
    };
  },
  // - this property is used to generate values based on data properties
  // - you have to use this keyword to access the data properties
  computed: {
    //
  },
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
    handleKey($event) {
      this.message = $event.key;
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
/* */
</style>


