<template>
  <div>
    <!-- Using Module Features-->
    <!-- <table class="table table-sm table-bordered" v-bind:class="tableClass"> -->

    <!-- access the state properties defined in a module-->
    <table class="table table-sm table-bordered" v-bind:class="'table-striped' == useStripedTable">
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
            <button class="btn btn-sm" v-bind:class="editClass" v-on:click="editProduct(p)">Edit</button>
            <button
              class="btn btn-sm"
              v-bind:class="deleteClass"
              v-on:click="deleteProduct(p)"
            >Delete</button>
          </td>
        </tr>
        <tr v-if="products.length == 0">
          <td colspan="5" class="text-center">No Data</td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <!-- INVOKING MAPPED METHOD-->
      <button class="btn btn-primary" v-on:click="createNew()">Create New</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    // products() {
    //   return this.$store.state.products;
    // },

    // create a computed property called "products" that returns the value of
    // the "products" data store state property
    ...mapState(["products"]),

    // create a computed property called useStripedTable that is mapped to the
    // stripedTable state property defined in the prefs module
    ...mapState({
      useStripedTable: (state) => state.prefs.stripedTable,
    }),
    ...mapGetters({
      tableClass: "prefs/tableClass",
      editClass: "prefs/editClass",
      deleteClass: "prefs/deleteClass",
    }),
  },
  methods: {
    // createNew() {
    //   this.$store.commit("selectProduct");
    // },
    // editProduct(product) {
    //   this.$store.commit("selectProduct", product);
    // },
    // deleteProduct(product) {
    //   this.$store.dispatch("deleteProductAction", product);
    // },

    ...mapMutations({
      // If you don’t want to use the names from the data store, then you can
      // pass a map object to the functions
      editProduct: "selectProduct",
      createNew: "selectProduct",
      setEditButtonColor: "prefs/setEditButtonColor",
      setDeleteButtonColor: "prefs/setDeleteButtonColor",
    }),
    ...mapActions({
      // create methods called getProducts and deleteProduct that invoke
      // the data store actions called getProductsAction and deleteProductAction
      getProducts: "getProductsAction",
      deleteProduct: "deleteProductAction",
    }),
  },
  created() {
    // populating a Vuex store
    //this.$store.dispatch("getProductsAction");

    this.getProducts();
    this.setEditButtonColor(false);
    this.setDeleteButtonColor(false);
  },
};
</script>