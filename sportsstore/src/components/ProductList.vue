<template>
  <div>
    <div v-for="p in products" v-bind:key="p.id" class="card m-1 p-1 bg-light">
      <h4>
        {{ p.name }}
        <span class="badge badge-pill badge-primary float-right">
          <!-- we apply filter "currency" -->
          {{ p.price | currency }}
        </span>
      </h4>
      <div class="card-text bg-white p-1">
        {{ p.description }}
        <button
          class="btn btn-success btn-sm float-right"
          v-on:click="handleProductAdd(p)"
        >
          Add To Cart
        </button>
      </div>
    </div>
    <page-controls />
  </div>
</template>

<script>
// is used to create a mapping between the component and state data in the store
import { mapGetters, mapMutations } from "vuex";
import PageControls from "./PageControls";

export default {
  components: { PageControls },
  // computed: is providing access to the data in the store
  computed: {
    // data comes from the data store's processedProducts getter (...store/index.js)
    // mapGetters function allows to specify that the processedProducts getter
    // will be mapped using the name "products"
    ...mapGetters({ products: "processedProducts" }),
  },
  // filters are functions that are used to format data values
  filters: {
    // currency(value) {
    //   return new Intl.NumberFormat("en-US", {
    //     style: "currency",
    //     currency: "USD",
    //   }).format(value);
    // },
  },
  methods: {
    ...mapMutations({ addProduct: "cart/addProduct" }),
    handleProductAdd(product) {
      // invoking cart/addProduct mutation on the data store
      // (with $router we access functionalities of Vue Router package)
      this.addProduct(product);
      // we use the routing system to navigate to the /cart URL
      this.$router.push("/cart");
    },
  },
};
</script>
