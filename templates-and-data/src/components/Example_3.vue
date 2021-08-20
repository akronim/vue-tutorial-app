<template>
  <!-- example 3 -->
  <div class="bg-primary text-white text-center m-2 p-3">
    <!-- content is automatically sanitized -->
    <span v-text="fragment"></span>

    <!-- displaying HTML content (no sanitization) -->
    <span v-html="fragment"></span>
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
      fragment: `<div class="form-group">
                  Password
                  <input class="form-control" />
                 </div>`,
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
    //
  },
  // functions used to format the result of an expression
  filters: {
    // functions used for filters cannot access the rest of component's data
    // filters are allowed to accept arguments
  },
};
</script>

<style></style>
