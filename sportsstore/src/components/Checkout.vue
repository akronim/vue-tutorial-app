<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col bg-dark text-white">
          <a class="navbar-brand">SPORTS STORE</a>
        </div>
      </div>
    </div>
    <div class="m-2">
      <div class="form-group m-2">
        <label>Name</label>
        <!-- v-model: two-way binding with "name" property, which keeps 
                the value of the "name" property and the contents of the 
                input element synchronized (it cannot be used with values from
        the data store)-->
        <!-- connect the validation features to the input element -->
        <!-- validation features are accessed through a property called $v, which
        has properties that correspond to the validation configuration -->
        <!-- order.name property corresponds to the order.name data value, 
        and its value is accessed using the $model property -->
        <input v-model="$v.order.name.$model" class="form-control" />
        <!-- to the ValidationError component we are passing the object
        returned by the $v.order.name property -->
        <validation-error v-bind:validation="$v.order.name" />
      </div>
    </div>

    <div class="m-2">
      <div class="form-group m-2">
        <label>Email</label>
        <input v-model="$v.order.email.$model" class="form-control" />
        <validation-error v-bind:validation="$v.order.email" />
      </div>
    </div>

    <div class="m-2">
      <div class="form-group m-2">
        <label>Address</label>
        <input v-model="$v.order.address.$model" class="form-control" />
        <validation-error v-bind:validation="$v.order.address" />
      </div>
    </div>

    <div class="m-2">
      <div class="form-group m-2">
        <label>City</label>
        <input v-model="$v.order.city.$model" class="form-control" />
        <validation-error v-bind:validation="$v.order.city" />
      </div>
    </div>

    <div class="m-2">
      <div class="form-group m-2">
        <label>Zip</label>
        <input v-model="$v.order.zip.$model" class="form-control" />
        <validation-error v-bind:validation="$v.order.zip" />
      </div>
    </div>

    <div class="text-center">
      <router-link to="/cart" class="btn btn-secondary m-1">Back</router-link>
      <button class="btn btn-primary m-1" v-on:click="submitOrder">Place Order</button>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import ValidationError from "./ValidationError";
import { mapActions } from "vuex";
export default {
  components: { ValidationError },
  // this component has its own local data,
  // which is not shared with any other component
  data: function () {
    return {
      order: {
          name: null,
          email: null,
          address: null,
          city: null,
          zip: null
      }
    };
  },
  // Vuelidate data validation is applied using a "validations" property
  validations: {
        order: {
            name: { required },
            email: { required, email },
            address: { required },
            city: { required },
            zip: { required }
        }
  },
  methods: {
    ...mapActions({
        "storeOrder": "storeOrder",
        "clearCart": "cart/clearCartData"
    }),
    async submitOrder() {
        // $touch method marks all of the elements as dirty
        this.$v.$touch();

        // this will report on the validity of all of the validators
        if (!this.$v.$invalid) {
            let order = await this.storeOrder(this.order);
            this.clearCart();

            // navigate to the /thanks URL
            this.$router.push(`/thanks/${order}`);
        }
    }
  },
};
</script>