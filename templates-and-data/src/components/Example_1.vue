<template>
  <!-- example 1 -->
  <div class="bg-primary text-white text-center m-2 p-3">
    <!-- text interpolation binding + chaining filters -->
    <h3>{{ firstName + ' ' + lastName | reverse | capitalize-it }}</h3>

    <!-- instead of text interpolation binding we can use a directive -->
    <h3>
      <span v-text="firstName + ' ' + lastName"></span>
    </h3>
  </div>
</template>

<script>
import Vue from "vue";

// global filter
Vue.filter("capitalize-it", (value) => {
  return value.toUpperCase();
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
      name: "Hello",
      firstName: "john",
      lastName: "doe",
    };
  },
  // functions used to format the result of an expression
  filters: {
    // functions used for filters cannot access the rest of component's data
    reverse(value) {
      return value.split("").reverse().join("");
    },
  },
};
</script>
