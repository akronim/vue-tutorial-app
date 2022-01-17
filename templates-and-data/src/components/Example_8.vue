<template>
  <!-- example 8 -->
  <!-- v-bind SETTING MULTIPLE ATTRIBUTES -->
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <h3 v-bind="attrValues">Product: {{name}}</h3>
    </div>
    <button v-on:click="handleClick_8" class="btn btn-primary">Press Me</button>
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
      highlight_8: false,
    };
  },
  // - this property is used to generate values based on data properties
  // - you have to use this keyword to access the data properties
  computed: {
    attrValues() {
      return {
        class: this.highlight_8 ? ["bg-light", "text-dark"] : [],
        style: { border: this.highlight_8 ? "5px solid red" : "" },
        "data-size": this.highlight_8 ? "big" : "small",
      };
    },
  },
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
    handleClick_8() {
      this.highlight_8 = !this.highlight_8;
    },
  }
};
</script>


