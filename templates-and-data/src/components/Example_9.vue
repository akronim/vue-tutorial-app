<template>
  <!-- example 9 -->
  <!-- v-bind SETTING THE VALUE OF A PROPERTY -->
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <h3 v-bind:text-content.prop="textContent"></h3>
    </div>
    <button v-on:click="handleClick" class="btn btn-primary">Press Me</button>
  </div>
</template>

<script>
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
      highlight: false,
    };
  },
  // - this property is used to generate values based on data properties
  // - you have to use this keyword to access the data properties
  computed: {
    textContent() {
      return this.highlight ? "Highlight!" : `Product: ${this.name}`;
    },
  },
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
    handleClick() {
      this.highlight = !this.highlight;
    },
  }
};
</script>


