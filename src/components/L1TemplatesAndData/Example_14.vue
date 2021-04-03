<template>
  <!-- example 14 : event handling modifiers - bubbling -->
  <div class="container-fluid">
    <div id="outer-element" class="bg-primary p-4 text-white h3" v-on:click="handleClick_14">
      Outer element
      <div id="middle-element" class="bg-secondary p-4" v-on:click="handleClick_14">
        Middle element
        <div id="inner-element" class="bg-info p-4" v-on:click="handleClick_14">Inner Element</div>
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
    handleClick_14($event) {
      console.log(
        `target: ${$event.target.id} | currentTarget: ${$event.currentTarget.id}`
      );

      // target: element that triggered the event
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


