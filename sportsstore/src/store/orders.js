import Axios from "axios";
import Vue from "vue";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.VUE_APP_BASE_URL_DEV
    : process.env.VUE_APP_BASE_URL_PROD;

const ORDERS_URL = `${baseUrl}/orders`;

export default {
  state: {
    orders: [],
  },
  mutations: {
    setOrders(state, data) {
      state.orders = data;
    },
    changeOrderShipped(state, order) {
      // Vue.set(object, propertyName, value)
      // we use this to trigger the change detection process
      // Vue.set ensures that change is recognized
      // and handled as an update
      Vue.set(
        order,
        "shipped",
        order.shipped == null || !order.shipped ? true : false
      );
    },
  },
  actions: {
    // store the order in DB
    async storeOrder(context, order) {
      // to get data from another module we use the rootState property
      order.cartLines = context.rootState.cart.lines;
      // returns the value of the id property that the server has provided
      return (await Axios.post(ORDERS_URL, order)).data.id;
    },
    async getOrders(context) {
      context.commit(
        "setOrders",
        (await context.rootGetters.authenticatedAxios.get(ORDERS_URL)).data
      );
    },
    async updateOrder(context, order) {
      context.commit("changeOrderShipped", order);
      await context.rootGetters.authenticatedAxios.put(
        `${ORDERS_URL}/${order.id}`,
        order
      );
    },
  },
};
