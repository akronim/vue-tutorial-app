<template>
  <!-- example 12 -->
  <!-- v-for : with computed properties and methods -->
  <div class="container-fluid mt-2">
    <h2 class="bg-primary text-white text-center p-3">Products</h2>
    <table class="table table-sm table-bordered text-left">
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <tbody>
        <tr v-for="p in pageItems_e12" v-bind:key="p.name">
          <td>{{ p.name }}</td>
          <td>{{ p. price | currency }}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button
        class="btn btn-secondary m-1"
        v-on:click="toggleSort_e12"
        v-bind:class="{'bg-primary': sort_e12}"
      >Toggle Sort</button>
      <button
        class="btn btn-secondary m-1"
        v-on:click="toggleFilter_e12"
        v-bind:class="{'bg-primary': filter_e12}"
      >Toggle Filter</button>
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <button
        v-for="i in pageCount_e12"
        v-bind:key="i + 'pageBtn'"
        v-on:click="selectPage_e12(i)"
        class="btn btn-secondary m-1"
        v-bind:class="{'bg-primary': currentPage_e12 == i}"
      >{{ i }}</button>
    </div>
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
      pageSize_e12: 3 /* number of items per page */,
      currentPage_e12: 1,
      filter_e12: false,
      sort_e12: false,
      products: [
        { name: "Kayak", price: 275 },
        { name: "Lifejacket", price: 48.95 },
        { name: "Soccer Ball", price: 19.5 },
        { name: "Corner Flags", price: 39.95 },
        { name: "Stadium", price: 79500 },
        { name: "Thinking Cap", price: 16 },
        { name: "Unsteady Chair", price: 29.95 },
        { name: "Human Chess Board", price: 75 },
        { name: "Bling Bling King", price: 1200 },
      ],
    };
  },
  // - this property is used to generate values based on data properties
  // - you have to use this keyword to access the data properties
  computed: {
    pageCount_e12() {
      // returns number of pages that the application requires
      return Math.ceil(this.dataItems_e12.length / this.pageSize_e12);
    },
    pageItems_e12() {
      // returns the data objects required for the current page
      let start = (this.currentPage_e12 - 1) * this.pageSize_e12;
      return this.dataItems_e12.slice(start, start + this.pageSize_e12);
    },
    dataItems_e12() {
      // prepare data for display
      let data = this.filter_e12
        ? this.products.filter((p) => p.price > 100)
        : this.products;
      return this.sort_e12
        ? data.concat().sort((p1, p2) => p2.price - p1.price)
        : data;
    },
  },
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
    selectPage_e12(page) {
      this.currentPage_e12 = page;
    },
    toggleFilter_e12() {
      this.filter_e12 = !this.filter_e12;
      this.currentPage_e12 = 1;
    },
    toggleSort_e12() {
      this.sort_e12 = !this.sort_e12;
      this.currentPage_e12 = 1;
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


