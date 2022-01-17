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
};
</script>

<style></style>
