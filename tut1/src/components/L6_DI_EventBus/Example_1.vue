<template>
  <div class="container-fluid">
    <div class="text-right m-2">
      <button class="btn btn-primary" v-on:click="toggleColors">Toggle Colors</button>
    </div>
    <div class="row">
      <div class="col-8 m-3">
        <product-display></product-display>
      </div>
      <div class="col m-3">
        <product-editor></product-editor>
      </div>
    </div>
  </div>
</template>

<!-- 
Dependency injection allows a component to define a service, which can be any value, function, or object,
and make it available to any of its descendants. Services provided through dependency injection are not
limited to just children and avoid the need to pass data through a chain of props to distribute it to the part of
the application where it is needed.
-->


<script>
import ProductDisplay from "./ProductDisplay";
import ProductEditor from "./ProductEditor";

export default {
  name: "App",
  components: { ProductDisplay, ProductEditor },
  data: function () {
    return {
      // If you want to create a service that does propagate changes, then you
      // must assign an object to a data property and use this as the value
      // the service
      reactiveColors: {
        bg: "bg-secondary",
        text: "text-white",
      },
    };
  },
  /*
    The provide property follows the same pattern as the data property and returns a function 
    that produces an object whose properties are the names of the services that will be 
    available to descendant components. 

    When a component wants to consume a service provided by its antecedents, it uses the 
    inject property.

    - a service "colors" provides details of the Bootstrap CSS classes that should be used 
    for background and text

    - this service will be available to all descendant components

  */

  provide: function () {
    return {
      colors: this.reactiveColors,
      labelFormatter: (value) => `Enter ${value}:`,
    };
  },
  methods: {
    toggleColors() {
      if (this.reactiveColors.bg == "bg-secondary") {
        this.reactiveColors.bg = "bg-light";
        this.reactiveColors.text = "text-danger";
      } else {
        this.reactiveColors.bg = "bg-secondary";
        this.reactiveColors.text = "text-white";
      }
    },
  },
};
</script>