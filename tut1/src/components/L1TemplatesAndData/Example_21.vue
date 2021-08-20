<!-- components are defined with:
  1) template element
  2) script element
  3) style element
 -->

<template>
  <div class="container-fluid">
    <div class="bg-info m2 p-2 text-white">Value: {{dataValue}}</div>

    <!-- one-way binding -->
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-on:change="handleChange" />
          Data Value
        </label>
      </div>
    </div>

    <!-- two-way binding -->
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-check">
        <label class="form-check-label">
          <input
            class="form-check-input"
            type="checkbox"
            v-on:change="handleChange"
            v-bind:checked="dataValue"
          />
          Data Value
        </label>
      </div>
    </div>
    <div class="text-center m-2">
      <button class="btn btn-secondary" v-on:click="reset">Reset</button>
    </div>
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
      dataValue: false,
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
    reset() {
      this.dataValue = false;
    },
    handleChange($event) {
      this.dataValue = $event.target.checked;
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


