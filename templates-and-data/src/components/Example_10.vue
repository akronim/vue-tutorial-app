<template>
    <!-- example 10 -->
    <!-- v-for -->
    <div class="container-fluid mt-2">
      <h2 class="bg-primary text-white text-center p-3">Products</h2>
      <table class="table table-sm table-bordered text-left">
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <tbody>
          <!-- we use "name" property as the key for the data objects -->
          <!-- v-for directive supports an additional variable that is assigned
          the index of the current object-->
          <!-- we set a custom attr named "odd" on each tr (odd rows are made memebers
          of the "odd" class, whitch matches the selector in the style element)-->
          <tr v-for="(p, i) in products" v-bind:key="p.name" v-bind:odd="i % 2 == 0">
            <td>{{i + 1}}</td>
            <td>{{p.name}}</td>
            <td>{{p.price | currency}}</td>
          </tr>
        </tbody>
      </table>
      <div class="text-center">
        <button class="btn btn-primary" v-on:click="handleClick_10">Press Me</button>
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
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
      handleClick_10() {
      // ok
      // this.products.push(this.products.shift());

      // ok
      // this.products = this.products.filter(p => p.price > 20);

      // nok Vue.js can't detect this change
      // this.products[1] = { name: "Running Shoes", price: 100 };

      // ok
      Vue.set(this.products, 1, { name: "Running Shoes", price: 100 });
    },
    
  },
};
</script>


<style>
[odd] {
  background-color: lightblue;
}

tbody > tr:nth-child(even) {
  background-color: coral;
}
</style>


