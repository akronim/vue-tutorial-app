<!-- components are defined with:
  1) template element
  2) script element
  3) style element
 -->

<template>
  <div>
    <div class="bg-secondary text-white text-center m-2 p-2 h5">
      {{ message }}
      <!-- Using a prop to configure a child component -->
      <ChildComponent labelText="Name" initialValue="Kayak"></ChildComponent>
      <child-component labelText="Name" initialValue="Kayak"></child-component>
      <MyFeature label-text="Category" initial-value="Watersports"></MyFeature>
      <my-feature label-text="Category" initial-value="Watersports"></my-feature>
    </div>

    <div class="bg-secondary text-white text-center m-2 p-2 h5">
      <!-- Using an Expression -->
      <div class="form-group">
        <input class="form-control" v-model="labelText" />
      </div>
      <!-- set up a one-way binding between the child component’s labelText prop 
      and the parent component’s data property-->
      <my-feature v-bind:label-text="labelText" initial-value="Kayak"></my-feature>
    </div>

    <!-- Receiving a Custom Event from a Child Component-->
    <div class="bg-secondary text-white text-center m-2 p-2 h5">
      <h6>{{ message }}</h6>
      <!-- The v-on is used by a parent to receive events from its child -->
      <ChildComponent2 v-bind:initial-product="product" v-on:productSubmit="updateProduct"></ChildComponent2>
    </div>

    <!-- Providing Elements for a Slot-->
    <div class="bg-secondary text-white text-center m-2 p-2 h5">
      <h6>{{ message }}</h6>
      <ChildComponent3 v-bind:initial-product="product" v-on:productSubmit="updateProduct">
        <!-- content for the slot element in the child component’s template-->
        <div slot="header" class="bg-warning m-2 p-2 h3 text-dark">[SLOT] Product Editor</div>
        <div
          slot="footer"
          class="bg-warning p-2 h3 text-dark"
        >[SLOT] Check Details Before Submitting</div>
      </ChildComponent3>
    </div>

    <!-- Providing Elements for a Slot 2-->
    <div class="bg-secondary text-white text-center m-2 p-2 h5">
      <product-display v-bind:product="product">
        <div slot-scope="data_product" class="bg-info text-left">{{data_product.propname}} is {{ data_product.propvalue }}</div>
      </product-display>
      <ChildComponent3 v-bind:initial-product="product" v-on:productSubmit="updateProduct">
        <div slot="header" class="bg-warning m-2 p-2 h3 text-dark">Product Editor</div>
        <div slot="footer" class="bg-warning p-2 h3 text-dark">Check Details Before Submitting</div>
      </ChildComponent3>
    </div>
  </div>
</template>

<script>
import ChildComponent from "./Child";
import ChildComponent2 from "./Child_2";
import ChildComponent3 from "./Child_3";
import ProductDisplay from "./ProductDisplay";

// component's configuration object
export default {
  // The Vue DevTools browser extension uses the optional "name" property to show
  // the structure of the application
  name: "App",
  components: {
    ChildComponent,
    MyFeature: ChildComponent,
    ChildComponent2,
    ChildComponent3,
    ProductDisplay,
  },
  // a specific pattern must be followed to define data values for a component
  data: function () {
    return {
      // changing the value is automatically reflected throughout the application
      message: "This is the parent component",
      labelText: "Name",
      product: {
        name: "Kayak",
        category: "Watersports",
        price: 275,
      },
    };
  },
  // section used to define watchers - this feature allows a component to receive
  // notifications when one if its data values changes
  watch: {
    //
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
    updateProduct(newProduct) {
      this.message = JSON.stringify(newProduct);
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


