<!-- components are defined with:
  1) template element
  2) script element
  3) style element
 -->

<template>
  <div class="container-fluid">
    <div class="bg-info m2 p-2 text-white">{{name}}</div>
    <div class="bg-info m2 p-2 text-white">{{password}}</div>
    <div class="bg-info m2 p-2 text-white">{{details}}</div>

    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-group">
        <label>Name</label>
        <input class="form-control" v-model="name" />
      </div>
    </div>

    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
    </div>

    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-group">
        <label>Details</label>
        <textarea class="form-control" v-model="details" />
      </div>
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
      name: "Bob",
      password: "secret",
      details: "Has admin access",
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


<style>
/* */
</style>


