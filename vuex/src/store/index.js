// The main advantage of using a data store is that it separates the application’s
// data from the components, which keeps the components simple, allows them to
// interact easily, and makes the entire project easier to understand and test.

// create the Vuex store in a folder called store (src/store)

import Vue from "vue";
import Vuex from "vuex";
import { GET, POST, PUT, DELETE } from "../rest_data_sources/restDataSource";

// Registering and Using a Data Store Module
// Vuex combines the state, getters, mutations, and actions defined in the module
// with those defined directly in the index.js file
import PrefsModule from "./preferences";

// enable the Vuex functionality
Vue.use(Vuex);

// create the data store
export default new Vuex.Store({
  // configuration object
  // Registering and Using a Data Store Module
  modules: {
    prefs: PrefsModule,
  },
  // throw an error if a direct change is made
  //          (should only be used during development)
  strict: true,
  state: {
    products: [],
    selectedProduct: null,
  },
  // Mutations are functions that receive the current state of the data store
  // and an optional payload argument that provides context to make changes.
  // Mutation functions access the current state of the data store using
  // the first function parameter
  // You don’t use the this keyword in mutations
  // only synchronous operations - not suitable for working with
  // a RESTful web service
  mutations: {
    saveProduct(currentState, product) {
      let index = currentState.products.findIndex((p) => p.id == product.id);
      if (index == -1) {
        currentState.products.push(product);
      } else {
        Vue.set(currentState.products, index, product);
      }
    },
    deleteProduct(currentState, product) {
      let index = currentState.products.findIndex((p) => p.id == product.id);
      currentState.products.splice(index, 1);
    },
    selectProduct(currentState, product) {
      currentState.selectedProduct = product;
    },
  },
  // getters feature is the equivalent of a computed property in a component
  // each getter is a function that receives an object that provides access to
  // the data store’s state properties and whose result is the computed value
  // - getters should not make changes to the data in the store!!!
  getters: {
    orderedProducts(state) {
      // The concat method generates a new array and ensures that reading
      // the value of the getter doesn’t cause a change in the store’s
      // state data
      return state.products.concat().sort((p1, p2) => p2.price - p1.price);
    },
    // One getter can build on the result of another getter by defining
    // a second parameter which allows the getter’s function to receive an
    // object that provides access to the other getters in the store
    filteredProducts(state, getters) {
      // Providing Arguments to Getters
      return (amount) =>
        getters.orderedProducts.filter((p) => p.price > amount);
    },
  },
  // - not permitted to modify the state data directly and must work through
  // mutations, using the commit method
  // - each action is a function that receives a context object that provides
  // access to the state, getters, and mutations
  actions: {
    async getProductsAction(context) {
      (await GET("products/")).forEach((p) => context.commit("saveProduct", p));
    },
    async saveProductAction(context, product) {
      let index = context.state.products.findIndex((p) => p.id == product.id);
      if (index == -1) {
        await POST("products/", product);
      } else {
        await PUT(`products/${product.id}`, product);
      }
      context.commit("saveProduct", product);
    },
    async deleteProductAction(context, product) {
      await DELETE(`products/${product.id}`);
      context.commit("deleteProduct", product);
    },
  },
});

// The data is read-only, and all changes are made using separate functions
// called mutations. When creating the data store, the application’s data
// is defined using a state property, and the set of changes that can be made
// to that data is specified using a mutations property.

// make it available to the application’s components
// by configuring the Vue object in the main.js file
