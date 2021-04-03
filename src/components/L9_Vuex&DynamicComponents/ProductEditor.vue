<template>
  <div>
    <div class="form-group">
      <label>ID</label>
      <input class="form-control" v-model="product.id" />
    </div>
    <div class="form-group">
      <label>Name</label>
      <input class="form-control" v-model="product.name" />
    </div>
    <div class="form-group">
      <label>Category</label>
      <input class="form-control" v-model="product.category" />
    </div>
    <div class="form-group">
      <label>Price</label>
      <input class="form-control" v-model.number="product.price" />
    </div>
    <div class="text-center">
      <button class="btn btn-primary" v-on:click="save">{{ editing ? "Save" : "Create" }}</button>
      <button class="btn btn-secondary" v-on:click="cancel">Cancel</button>
    </div>
  </div>
</template>


<script>
let unwatcher;

export default {
  data: function () {
    return {
      editing: false,
      product: {},
    };
  },
  methods: {
    async save() {
      // I added the async keyword to the save method, which allows me to use
      // the await keyword when saving a product so that navigation isn’t performed
      // until after the HTTP operation has completed
      await this.$store.dispatch("saveProductAction", this.product);
      this.$store.commit("nav/selectComponent", "table");
      this.product = {};
    },
    cancel() {
      this.$store.commit("selectProduct");
      this.$store.commit("nav/selectComponent", "table");
    },
    selectProduct(selectedProduct) {
      if (selectedProduct == null) {
        this.editing = false;
        this.product = {};
      } else {
        this.editing = true;
        this.product = {};
        Object.assign(this.product, selectedProduct);
      }
    },
  },
  created() {
    // To respond to the signals that the ProductDisplay component is sending
    // through the data store, we use Vuex watcher
    unwatcher = this.$store.watch(
      (state) => state.selectedProduct,
      this.selectProduct
    );
    this.selectProduct(this.$store.state.selectedProduct);
  },
  beforeDestroy() {
    // ensure that the watcher doesn’t linger around when Vue.js
    // has destroyed the component
    unwatcher();
  },
};
</script>