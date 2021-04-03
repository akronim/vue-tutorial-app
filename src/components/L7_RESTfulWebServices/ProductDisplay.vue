<template>
  <div>
    <table class="table table-sm table-striped table-bordered">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th></th>
      </tr>
      <tbody>
        <tr v-for="p in products" v-bind:key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.category }}</td>
          <td>{{ p.price }}</td>
          <td>
            <button class="btn btn-sm btn-primary" v-on:click="editProduct(p)">Edit</button>
            <button class="btn btn-sm btn-danger" v-on:click="deleteProduct(p)">Delete</button>
          </td>
        </tr>
        <tr v-if="products.length == 0">
          <td colspan="5" class="text-center">No Data</td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button class="btn btn-primary" v-on:click="createNew">Create New</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data: function () {
    return {
      products: [],
    };
  },
  filters: {
    currency(value) {
      return `$${value.toFixed(2)}`;
    },
  },
  methods: {
    createNew() {
      // The $emit method is used to send events through an event bus
      this.eventBus.$emit("create");
    },
    editProduct(product) {
      this.eventBus.$emit("edit", product);
    },
    async deleteProduct(product) {
      await this.restDataSource.deleteProduct(product);
      let index = this.products.findIndex((p) => p.id == product.id);
      this.products.splice(index, 1);
    },
    processProducts(newProducts) {
      // - receive an array of product objects and use them to replace the
      // contents of the data property named products
      // - Vue.js has some difficulties detecting changes in arrays,
      // so we use the splice method to remove any existing objects
      this.products.splice(0);
      // - we then use the destructuring operator to unpack the values in
      // the method’s argument and use the push method to repopulate the array
      this.products.push(...newProducts);
    },
    async processComplete(product) {
      let index = this.products.findIndex((p) => p.id == product.id);
      if (index == -1) {
        // creating
        await this.restDataSource.saveProduct(product);
        this.products.push(product);
      } else {
        // editing
        await this.restDataSource.updateProduct(product);
        Vue.set(this.products, index, product);
      }
    },
  },
  // The inject property is used to declare a dependency on the eventBus service
  inject: ["eventBus", "restDataSource"],
  //   created() {
  //     this.restDataSource.getProducts().then((resp) => {
  //       this.processProducts(resp.data);
  //     });
  //   },
  // async/await version without "then" method
  async created() {
    this.processProducts(await this.restDataSource.getProducts());

    this.eventBus.$on("complete", this.processComplete);
  },
};
</script>