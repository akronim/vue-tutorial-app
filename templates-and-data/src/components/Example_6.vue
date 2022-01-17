<template>
  <!-- example 6 -->
  <!-- v-bind SETTING INDIVIDUAL STYLES -->
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <h3 v-bind:style="elemClasses_6" class="display-4">Product: {{name}}</h3>
    </div>
    <button v-on:click="handleClick_6" class="btn btn-primary">Press Me</button>
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
      highlight_6: false,
    };
  },
  // - this property is used to generate values based on data properties
  // - you have to use this keyword to access the data properties
  computed: {
    elemClasses_6() {
      return {
        border: "5px solid red",
        "background-color": this.highlight_6 ? "coral" : "",
      };
    },
  },
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
    handleClick_6() {
      this.highlight_6 = !this.highlight_6;
    },
  }
};
</script>


