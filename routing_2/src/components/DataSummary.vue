<!-- Using Asynchronous Components
- used to defer the loading of components until they are required — a feature 
  that is also known as lazy loading
- the component won’t be loaded from the HTTP server until it is required
- in contrast to the default strategy of eager loading
- Lazy loading reduces the size of the initial download but trades this against 
  the need to make additional HTTP requests for components if they are required
-->

<template>
  <div>
    <h3 class="bg-success text-center text-white p-2">Summary</h3>
    <table class="table">
      <tr>
        <th>Number of Products:</th>
        <td>{{ products.length}}</td>
      </tr>
      <tr>
        <th>Number of Categories:</th>
        <td>{{ categoryCount }}</td>
      </tr>
      <tr>
        <th>Highest Price:</th>
        <td>{{ highestPrice | currency }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";


export default {
  computed: {
    ...mapState(["products"]),
    categoryCount() {
      if (this.products.length > 0) {
        return this.products
          .map((p) => p.category)
          .filter((cat, index, arr) => arr.indexOf(cat) == index).length;
      } else {
        return 0;
      }
    },
    highestPrice() {
      if (this.products.length == 0) {
        return 0;
      } else {
        return Math.max(...this.products.map((p) => p.price));
      }
    },
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
    },
  },
};
</script>