<template>
  <div>
    <table class="table table-sm table-striped table-bordered">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th></th>
      </tr>
      <tbody>
        <tr v-for="p in products" v-bind:key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.price | currency }}</td>
          <td>
            <button class="btn btn-sm btn-primary" v-on:click="editProduct(p)">Edit</button>
          </td>
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
      products: [
        { id: 1, name: "Kayak", price: 275 },
        { id: 2, name: "Lifejacket", price: 48.95 },
        { id: 3, name: "Soccer Ball", price: 19.5 },
        { id: 4, name: "Corner Flags", price: 39.95 },
        { id: 5, name: "Stadium", price: 79500 },
      ],
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
    processComplete(product) {
      let index = this.products.findIndex((p) => p.id == product.id);
      if (index == -1) {
        this.products.push(product);
      } else {
        Vue.set(this.products, index, product);
      }
    },
  },
  // The inject property is used to declare a dependency on the eventBus service
  inject: ["eventBus"],

  // The created method is used to listen for the complete event and call the processComplete
  // method when it is received.
  // The processComplete method uses the id property as a key to update objects that have
  // been edited or to add new objects.
  created() {
    this.eventBus.$on("complete", this.processComplete);
  },
};
</script>