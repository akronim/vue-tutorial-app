<template>
  <div>
    <div class="bg-success text-white text-center m-2 p-2 h5">
      {{ message }}
      <div class="form-group">
        <!-- The result is that when the parent component’s input element is edited, the new value is received by
          the child component -->
        <input class="form-control" v-model="labelText" />
      </div>
      <!-- Using an Expression -->
      <!-- set up a one-way binding between the child component’s labelText prop 
      and the parent component’s data property-->
      <my-feature
        v-bind:label-text="labelText"
        initial-value="Kayak"
      ></my-feature>
    </div>
  </div>
</template>

<script>
import ChildComponent from "./Child_1";

// component's configuration object
export default {
  // The Vue DevTools browser extension uses the optional "name" property to show
  // the structure of the application
  name: "App",
  components: {
    MyFeature: ChildComponent,
  },
  // a specific pattern must be followed to define data values for a component
  data: function() {
    return {
      // changing the value is automatically reflected throughout the application
      message: "This is the parent component",
      labelText: "Name",
    };
  },
};
</script>


