<!-- components are defined with:
  1) template element
  2) script element
  3) style element
 -->

<template>
  <div>
    <div class="bg-primary text-white m-2 p-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="checked" />
        <label>Checkbox</label>
      </div>
      Checked Value: {{ checked }}
      <div class="bg-info p-2">
        Names:
        <ul>
          <li v-for="name in names" v-bind:key="name">{{ name }}</li>
        </ul>
      </div>
      <div class="text-white center my-2">
        <button class="btn btn-light" v-on:click="doChange">Change</button>
      </div>
      <div class="bg-info p-2" v-if="checked">
        <message-display></message-display>
      </div>
    </div>

    <div class="bg-danger text-white text-center h3 p-2" v-if="error.occurred">
      An Error Has Occurred
      <h4>Error : "{{ error.error }}" ({{ error.source }})</h4>
    </div>
    <div v-else class="bg-primary text-white m-2 p-2">
      <message-display2></message-display2>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import MessageDisplay from "./MessageDisplay";
import MessageDisplay_2 from "./MessageDisplay_2";

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
    MessageDisplay,
    MessageDisplay2: MessageDisplay_2,
  },
  // props are received from the parent component
  // we add a prop using an array of strings
  // to modify the prop's value you must use a data or computed property
  props: [],
  // a specific pattern must be followed to define data values for a component
  data: function() {
    return {
      // changing the value is automatically reflected throughout the application
      checked: true,
      names: ["Bob", "Alice", "Peter", "Dora"],
      error: {
        occurred: false,
        error: "",
        source: "",
      },
    };
  },
  // section used to define watchers - this feature allows a component to receive
  // notifications when one if its data values changes
  watch: {
    checked: function(newValue, oldValue) {
      console.log(`Checked Watch, Old: ${oldValue}, New: ${newValue}`);
    },
    // checked: {
    //   handler: function (newValue, oldValue) {
    //     console.log(`Checked Watch, Old: ${oldValue}, New: ${newValue}`);
    //   },
    //   // tells Vue.js to invoke the handler as soon as the watcher is set up
    //   immediate: true,
    // },
    // checked: {
    //   handler: function (newValue, oldValue) {
    //     console.log(`Checked Watch, Old: ${oldValue}, New: ${newValue}`);
    //   },
    //   // will monitor all the properties defined by an object assigned
    //   // to a data property
    //   deep: true,
    // },
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
    doChange() {
      this.checked = !this.checked;
      this.names.reverse();

      // Using a Post-Update Callback
      // Vue.nextTick method, which can be used to perform a task after all
      // of the pending changes have been applied
      Vue.nextTick(() => console.log("Callback Invoked"));
    },
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
    console.log("beforeCreate method called " + this.checked);
  },
  created() {
    // created method provides a good opportunity to request the data
    // from a RESTful API
    console.log("created method called " + this.checked);
  },
  // Mounting Phase
  // Most projects don’t need to use the mounted method
  // Vue.js deals with the component’s template, handling the data bindings,
  // directives, and other application features
  mounted() {
    console.log("mounted method called " + this.checked);
  },
  // Update Phase
  // Most projects don’t need to use the beforeUpdate and updated methods
  beforeUpdate() {
    console.log(
      `beforeUpdate called. Checked: ${this.checked}` +
        ` Name: ${this.names[0]} List Elements: ` +
        this.$el.getElementsByTagName("li").length
    );
  },
  updated() {
    console.log(
      `updated called. Checked: ${this.checked}` +
        ` Name: ${this.names[0]} List Elements: ` +
        this.$el.getElementsByTagName("li").length
    );
  },
  // Destruction Phase

  // The lifecycle methods END
  // To handle errors from its children, a component implements
  // the errorCaptured method
  errorCaptured(error, component, source) {
    this.error.occurred = true;
    this.error.error = error;
    this.error.source = source;

    // If the errorCaptured method returns false, the error won’t
    // be propagated further up the hierarchy of components
    return true;
  },
};
</script>

<style>
/* */
</style>
