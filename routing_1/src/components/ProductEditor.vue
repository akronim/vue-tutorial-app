<template>
  <div>
    <h3 class="btn-primary text-center text-white p-2">
      {{ editing ? "Edit" : "Create" }}
    </h3>
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
      <button class="btn btn-primary" v-on:click="save">
        {{ editing ? "Save" : "Create" }}
      </button>
      <router-link v-bind:to="{ name: 'table' }" class="btn btn-secondary"
        >Cancel</router-link
      >

      <router-link v-if="editing" v-bind:to="nextUrl" class="btn btn-info"
        >Next</router-link
      >
    </div>
  </div>
</template>

<script>
let unwatcher;

export default {
  data: function() {
    return {
      editing: false,
      product: {},
    };
  },
  computed: {
    nextUrl() {
      if (this.product.id != null && this.$store.state.products != null) {
        let index = this.$store.state.products.findIndex(
          (p) => p.id == this.product.id
        );
        let target =
          index < this.$store.state.products.length - 1 ? index + 1 : 0;
        return `/edit/${this.$store.state.products[target].id}`;
      }
      return "/edit";
    },
  },
  methods: {
    async save() {
      // I added the async keyword to the save method, which allows me to use
      // the await keyword when saving a product so that navigation isn’t performed
      // until after the HTTP operation has completed
      await this.$store.dispatch("saveProductAction", this.product);
      this.$router.push({ name: "table" });
      this.product = {};
    },
    selectProduct(route) {
      if (route.params.op == "create") {
        this.editing = false;
        this.product = {};
      } else {
        let productId = route.params.id;
        let selectedProduct = this.$store.state.products.find(
          (p) => p.id == productId
        );
        this.product = {};
        Object.assign(this.product, selectedProduct);
        this.editing = true;
      }
    },
  },
  created() {
    // To respond to the signals that the ProductDisplay component is sending
    // through the data store, we use Vuex watcher
    unwatcher = this.$store.watch(
      (state) => state.products,
      () => this.selectProduct(this.$route)
    );
    this.selectProduct(this.$route);
  },
  beforeDestroy() {
    // ensure that the watcher doesn’t linger around when Vue.js
    // has destroyed the component
    unwatcher();
  },
  // is called when the route is about to change without destroying the component
  beforeRouteUpdate(to, from, next) {
    this.selectProduct(to);
    // allows other components in the application to receive the notification
    next();
  },
};
</script>
