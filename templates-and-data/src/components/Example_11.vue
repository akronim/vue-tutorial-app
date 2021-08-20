<template>
  <!-- example 11 -->
  <!-- v-for : Enumerating object properties -->
  <div class="container-fluid mt-2">
    <h2 class="bg-primary text-white text-center p-3">Products</h2>
    <table class="table table-sm table-bordered text-left">
      <tr>
        <th>Index</th>
        <th>Key</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <tbody>
        <tr v-for="(p, key, i) in products_11" v-bind:key="p.name">
          <td>{{i + 1}}</td>
          <td>{{key}}</td>
          <td>{{p.name}}</td>
          <td>{{p.price | currency}}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button class="btn btn-primary" v-on:click="handleClick_11">Press Me</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

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
      products_11: {
        1: { name: "Kayak", price: 275 },
        2: { name: "Lifejacket", price: 48.95 },
        3: { name: "Soccer Ball", price: 19.5 },
        4: { name: "Corner Flags", price: 39.95 },
      },
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
    handleClick_11() {
      Vue.set(this.products_11, 5, { name: "Running Shoes", price: 100 });
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


