<template>
  <div>
    <div class="bg-success text-white text-center m-2 p-2 h5">
      {{ message }}
      <!-- Using a prop to configure a child component -->
      <ChildComponent labelText="Name" initialValue="Kayak"></ChildComponent>
      <child-component labelText="Name" initialValue="Kayak"></child-component>
      <MyFeature label-text="Category" initial-value="Watersports"></MyFeature>
      <my-feature
        label-text="Category"
        initial-value="Watersports"
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
    ChildComponent,
    MyFeature: ChildComponent,
  },
  // a specific pattern must be followed to define data values for a component
  data: function() {
    return {
      // changing the value is automatically reflected throughout the application
      message: "This is the parent component",
      labelText: "Name",
    };
  }
};
</script>


