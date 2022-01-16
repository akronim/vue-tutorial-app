<template>
  <!-- example 5 -->
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <!-- v-bind is used to set an element's attributes or properties -->
      <h3 v-bind:class="elemClasses_5">Product: {{ name }}</h3>

      <!-- v-bind shorthand -->
      <h3 :class="elemClasses_5">Product: {{ name }}</h3>

      <!-- using an object to control class membership -->
      <h3 v-bind:class="elemClasses_5B" class="display-4">
        Product: {{ name }}
      </h3>
    </div>
    <button v-on:click="handleClick_5" class="btn btn-primary">Press Me</button>
    <button v-on:click="handleClick_5B" class="btn btn-primary">
      Or Press Me
    </button>
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
      highlight_5: false,
      highlight_5B: false,
    };
  },
  // - this property is used to generate values based on data properties
  // - you have to use this keyword to access the data properties
  computed: {
    elemClasses_5() {
      return this.highlight_5
        ? ["bg-light", "text-dark", "display-4"]
        : ["bg-dark", "text-light", "p-2"];
    },
    elemClasses_5B() {
      return {
        "bg-dark text-light": !this.highlight_5B,
        "bg-light text-dark": this.highlight_5B,
      };
    },
  },
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
    handleClick_5() {
      this.highlight_5 = !this.highlight_5;
    },
    handleClick_5B() {
      this.highlight_5B = !this.highlight_5B;
    },
  },
};
</script>

<style></style>
