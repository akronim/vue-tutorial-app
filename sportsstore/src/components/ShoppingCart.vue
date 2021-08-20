<template>
  <div class="container-fluid" style="background: slategray">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand">SPORTS STORE</a>
      </div>
    </div>
    <div class="row">
      <div class="col mt-2">
        <h2 class="text-center">Your Cart</h2>
        <table class="table table-bordered table-striped p-2">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Product</th>
              <th class="text-right">Price</th>
              <th class="text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="lines.length == 0">
              <td colspan="4" class="text-center">Your cart is empty</td>
            </tr>
            <!--  child component "cart-line" 
                  v-bind:line="sc_line" : set the value of sc_line prop
                  v-on directive is used to to receive the custom events
            -->
            <cart-line
              v-for="line in lines"
              v-bind:key="line.product.id"
              v-bind:sc_line="line"
              v-on:quantity="handleQuantityChange(line, $event)"
              v-on:remove="remove"
            />
          </tbody>
          <tfoot v-if="lines.length > 0">
            <tr>
              <td colspan="3" class="text-right">Total:</td>
              <td class="text-right">{{ totalPrice | currency }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="text-center">
          <!-- router-link is used to generate a navigation element-->
          <router-link to="/" class="btn btn-secondary m-1">Continue Shopping</router-link>
          <router-link
            to="/checkout"
            class="btn btn-primary m-1"
            v-bind:disabled="lines.length == 0"
          >Checkout</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import CartLine from "./ShoppingCartLine";

export default {
  components: { CartLine },
  computed: {
    // state properties are mapped by defining a function that receives
    // the state object and selects the property that is required
    ...mapState({ lines: (state) => state.cart.lines }),
    ...mapGetters({ totalPrice: "cart/totalPrice" }),
  },
  methods: {
    ...mapMutations({
      change: "cart/changeQuantity",
      remove: "cart/removeProduct",
    }),
    handleQuantityChange(line, $event) {
      this.change({ line, quantity: $event });
    },
  },
};
</script>