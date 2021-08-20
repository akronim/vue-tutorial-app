<!-- components are defined with:
  1) template element
  2) script element
  3) style element
 -->

<template>
  <!-- routing system will be responsible for managing the content -->
  <!-- <router-view /> -->

  <div></div>
</template>

<script>
import Vue from "vue";

// global filter
Vue.filter("capitalize", (value) => {
  return value[0].toUpperCase() + value.slice(1);
});

// component's configuration object
export default {
  // The Vue DevTools browser extension uses the optional "name" property to show
  // the structure of the application
  name: "MyComponent",
  components: {
    //
  },
  // - a service "colors" provides details of the Bootstrap CSS classes
  // that should be used for background and text
  // - this service will be available to all descendant components
  provide: function () {
    return {
      colors: {
        bg: "bg-secondary",
        text: "text-white",
      },
    };
  },
  // When a component wants to consume a service provided by its antecedents,
  // it uses the inject property
  inject: ["colors"],
  // props are received from the parent component
  // we add a prop using an array of strings
  // to modify the prop's value you must use a data or computed property
  props: ["lorem", "ipsum"],
  // a specific pattern must be followed to define data values for a component
  data: function () {
    return {
      // changing the value is automatically reflected throughout the application
      name: "Lifejacket",
    };
  },
  // section used to define watchers - this feature allows a component to receive
  // notifications when one if its data values changes
  watch: {
    name: function (newValue, oldValue) {
      console.log(`Old: ${oldValue}, New: ${newValue}`);
    },
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
  // The lifecycle methods
  // Creation Lifecycle Methods
  beforeCreate() {
    // most projects won’t need to implement the beforeCreate event
  },
  created() {
    // created method provides a good opportunity to request the data
    // from a RESTful API
  },
  // Mounting Phase
  // Most projects don’t need to use the mounted method
  // Vue.js deals with the component’s template, handling the data bindings,
  // directives, and other application features
  mounted() {},
  // Update Phase
  // Most projects don’t need to use the beforeUpdate and updated methods
  beforeUpdate() {},
  updated() {},
  // Destruction Phase
  beforeDestroy: function () {},
  destroyed: function () {},
  // The lifecycle methods END
  // To handle errors from its children
  errorCaptured(error, component, source) {
    // do something

    // the error won’t be propagated further up the hierarchy of components
    return false;
  },
};
</script>


<style scoped>
/* */
</style>


