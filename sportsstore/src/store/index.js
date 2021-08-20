// Vuex package is used to create a data store that is used
// to share data throughout the application

// we enable vuex data store features in main.js in the src folder

import Vue from "vue";
import Vuex from "vuex";
// the most common choice of package to handle HTTP
import Axios from "axios";
import CartModule from "./cart";
import OrdersModule from "./orders";
import AuthModule from "./auth";

Vue.use(Vuex);

const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.VUE_APP_BASE_URL_DEV
    : process.env.VUE_APP_BASE_URL_PROD;

const productsUrl = `${baseUrl}/products`;
const categoriesUrl = `${baseUrl}/categories`;

export default new Vuex.Store({
  strict:
    process.env.NODE_ENV === "development"
      ? process.env.VUE_APP_VUEX_STRICT_DEV
      : process.env.VUE_APP_VUEX_STRICT_PROD,
  // adding modules
  // we will access the features from the CartModule by using prefix "cart"
  modules: { cart: CartModule, orders: OrdersModule, auth: AuthModule },
  state: {
    categoriesData: [],
    currentPage: 1,
    pageSize: 4,
    currentCategory: "All",
    pages: [],
    serverPageCount: 0,
    searchTerm: "",
    showSearch: false,
  },

  // getters section is for properties whose values are computed
  // using state properties
  getters: {
    // getters can access the result of other getters in the data store
    processedProducts: (state) => {
      // returns only the products required for the curret page
      return state.pages[state.currentPage];
    },
    pageCount: (state) =>
      // how many pages are required to display the product data
      state.serverPageCount,

    categories: (state) => ["All", ...state.categoriesData],
    // this type of getter has a parameter and it is used like a method
    productById: (state) => (id) => {
      return state.pages[state.currentPage].find((p) => p.id == id);
    },
  },
  // mutations section is used to define methods that change the values of one
  // or more state properties
  mutations: {
    _setCurrentPage(state, page) {
      state.currentPage = page;
    },
    _setPageSize(state, size) {
      state.pageSize = size;
      state.currentPage = 1;
    },
    _setCurrentCategory(state, category) {
      state.currentCategory = category;
      state.currentPage = 1;
    },
    addPage(state, page) {
      for (let i = 0; i < page.pageCount; i++) {
        // we use this, because assigning an item to an array index
        // won't trigger the change detection process
        // Vue.set ensures that change is recognized
        // and handled as an update
        Vue.set(
          state.pages,
          page.number + i,
          page.data.slice(
            i * state.pageSize,
            i * state.pageSize + state.pageSize
          )
        );
      }
    },
    clearPages(state) {
      state.pages.splice(0, state.pages.length);
    },
    setCategories(state, categories) {
      state.categoriesData = categories;
    },
    setPageCount(state, count) {
      state.serverPageCount = Math.ceil(Number(count) / state.pageSize);
    },

    setShowSearch(state, show) {
      state.showSearch = show;
    },
    setSearchTerm(state, term) {
      state.searchTerm = term;
      state.currentPage = 1;
    },
    // we insert new product at the start of the current page
    _addProduct(state, product) {
      state.pages[state.currentPage].unshift(product);
    },
    // locating the existing object and replacing it
    _updateProduct(state, product) {
      let page = state.pages[state.currentPage];
      let index = page.findIndex((p) => p.id == product.id);
      Vue.set(page, index, product);
    },
  },
  // Vuex supports async tasks by using a feature called actions
  // - any activity tat leads to an HTTP request for data has to be performed
  // using an action, and actions change state using mutations
  actions: {
    // context object provides access to the data store features
    async getData(context) {
      await context.dispatch("getPage", 2);
      // invoking "setCategories" mutation
      context.commit("setCategories", (await Axios.get(categoriesUrl)).data);
    },
    async getPage(context, getPageCount = 1) {
      // http://localhost:3500/products?_page=1&_limit=8
      // http://localhost:3500/products?_page=1&_limit=8&category=Watersports
      // http://localhost:3500/products?_page=1&_limit=8&category=Soccer&q=awesome
      let url =
        `${productsUrl}?_page=${context.state.currentPage}` +
        `&_limit=${context.state.pageSize * getPageCount}`;

      if (context.state.currentCategory != "All") {
        url += `&category=${context.state.currentCategory}`;
      }

      if (context.state.searchTerm != "") {
        url += `&q=${context.state.searchTerm}`;
      }

      let response = await Axios.get(url);

      // x-total-count header indicates how many objects are in the collection
      context.commit("setPageCount", response.headers["x-total-count"]);
      context.commit("addPage", {
        number: context.state.currentPage,
        data: response.data,
        pageCount: getPageCount,
      });
    },
    setCurrentPage(context, page) {
      context.commit("_setCurrentPage", page);
      if (!context.state.pages[page]) {
        context.dispatch("getPage");
      }
    },
    setPageSize(context, size) {
      context.commit("clearPages");
      context.commit("_setPageSize", size);
      context.dispatch("getPage", 2);
    },
    setCurrentCategory(context, category) {
      context.commit("clearPages");
      context.commit("_setCurrentCategory", category);
      context.dispatch("getPage", 2);
    },
    search(context, term) {
      context.commit("setSearchTerm", term);
      context.commit("clearPages");
      context.dispatch("getPage", 2);
    },
    clearSearchTerm(context) {
      context.commit("setSearchTerm", "");
      context.commit("clearPages");
      context.dispatch("getPage", 2);
    },
    async addProduct(context, product) {
      let data = (
        await context.getters.authenticatedAxios.post(productsUrl, product)
      ).data;
      product.id = data.id;
      this.commit("_addProduct", product);
    },
    // we refresh the data
    async removeProduct(context, product) {
      await context.getters.authenticatedAxios.delete(
        `${productsUrl}/${product.id}`
      );
      context.commit("clearPages");
      context.dispatch("getPage", 1);
    },
    async updateProduct(context, product) {
      await context.getters.authenticatedAxios.put(
        `${productsUrl}/${product.id}`,
        product
      );
      this.commit("_updateProduct", product);
    },
  },
});
