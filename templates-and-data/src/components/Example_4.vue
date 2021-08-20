<template>
  <!-- example 4 -->
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <!-- v-if v-else -->
      <h4 v-if="showElements">Product: {{ name }}</h4>
      <h4 v-else>{{ price }}</h4>

      <!-- v-if and template element-->
      <ul class="text-left">
        <li>List item</li>
        <template v-if="showElements">
          <li>{{ name }}</li>
          <li>{{ price }}</li>
        </template>
        <li>Other list item</li>
      </ul>

      <!-- v-if v-else-if v-else-->
      <h3 v-if="counter % 3 == 0">Product: {{ name }}</h3>
      <h3 v-else-if="counter % 3 == 1">Price: {{ price }}</h3>
      <h3 v-else>Category: {{ category }}</h3>

      <!-- v-show : hides an element but the element remains in the DOM 
          v-show : can't be used with the template element and has no 
      equivalent to the v-else-if and v-else directives-->
      <h3 v-show="counter % 2 == 0">Product: {{ name }}</h3>
      <h3 v-show="counter % 2 != 0">Price: {{ price }}</h3>
    </div>
    <button v-on:click="handleClick_4" class="btn btn-primary">Press Me</button>
  </div>
</template>

<script>
// component's configuration object
export default {
  // The Vue DevTools browser extension uses the optional "name" property to show
  // the structure of the application
  name: "MyComponent",
  // a specific pattern must be followed to define data values for a component
  data: function() {
    return {
      // changing the value is automatically reflected throughout the application
      name: "Lifejacket",
      price: 48.95,
      showElements: true,
      counter: 0,
      highlight_4: false,
      category: "watersports",
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
    handleClick_4() {
      this.highlight_4 = !this.highlight_4;
      this.showElements = !this.showElements;
      this.counter++;
    },
  },
  // functions used to format the result of an expression
  filters: {
    // functions used for filters cannot access the rest of component's data
    // filters are allowed to accept arguments
  },
};
</script>

<style></style>
