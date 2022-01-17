<template>
  <div>
    <!-- Providing Elements for a Slot-->
    <div class="bg-success text-white text-center p-2 m-2 h5">
      <h6>{{ message }}</h6>
      <ChildComponent>
        <!-- content for the slot element in the child component’s template-->
        <div class="bg-warning p-2 h5 text-dark">Unnamed slot</div>

        <div slot="header" class="bg-warning p-2 h5 text-dark">
          SLOT Product Editor
        </div>

        <div slot="footer" class="bg-warning p-2 h5 text-dark">
          SLOT Check Details Before Submitting
        </div>
      </ChildComponent>

      <product-display v-bind:product="product">
        <div slot-scope="data" class="bg-info text-left">
          {{ data.propname }} is {{ data.propvalue }}
        </div>
      </product-display>
    </div>
  </div>
</template>

<script>
import ChildComponent from "./Child_3";
import ProductDisplay from "./ProductDisplay";

// component's configuration object
export default {
  // The Vue DevTools browser extension uses the optional "name" property to show
  // the structure of the application
  name: "App",
  components: {
    ChildComponent,
    ProductDisplay,
  },
  // a specific pattern must be followed to define data values for a component
  data: function () {
    return {
      // changing the value is automatically reflected throughout the application
      message: "This is the parent component",
      product: {
        name: "Kayak",
        category: "Watersports",
        price: 275,
      },
    };
  },
};
</script>


