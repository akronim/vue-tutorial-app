<template>
  <div>
    <!-- Receiving a Custom Event from a Child Component-->
    <div class="bg-success text-white text-center m-2 p-2 h5">
      <h6>{{ message }}</h6>
      <h6>{{ messageFromChild }}</h6>
      <!-- The v-on is used by a parent to receive events from its child -->
      <ChildComponent
        v-bind:initial-product="product"
        v-on:productSubmit="updateProduct"
      ></ChildComponent>
    </div>
  </div>
</template>

<script>
import ChildComponent from "./Child_2";

// component's configuration object
export default {
  // The Vue DevTools browser extension uses the optional "name" property to show
  // the structure of the application
  name: "App",
  components: {
    ChildComponent,
  },
  // a specific pattern must be followed to define data values for a component
  data: function() {
    return {
      // changing the value is automatically reflected throughout the application
      message: "This is the parent component",
      labelText: "Name",
      product: {
        name: "Kayak",
        category: "Watersports",
        price: 275,
      },
      messageFromChild: ""
    };
  },
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
    updateProduct(newProduct) {
      this.messageFromChild = JSON.stringify(newProduct);
    },
  }
};
</script>


