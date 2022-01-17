<template>
  <div class="container-fluid">
    <div class="bg-danger text-white my-2 p-2" v-if="errors">
      <h5>The following problems have been found:</h5>
      <ul>
        <template v-for="errors in validationErrors">
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </template>
      </ul>
    </div>

    <!-- the "prevent" modifier is required to stop the browser from submitting 
    the form to the HTTP server-->
    <form v-on:submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Name</label>
        <input v-model="name" class="form-control" />
      </div>
      <div class="form-group">
        <label>Category</label>
        <input v-model="category" class="form-control" />
      </div>
      <div class="form-group">
        <label>Price</label>
        <input type="number" v-model.number="price" class="form-control" />
      </div>

      <div class="text-center">
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import validation from "../validationRules.js";
import Vue from "vue";

// component's configuration object
export default {
  // The Vue DevTools browser extension uses the optional "name" property to show
  // the structure of the application
  name: "MyComponent",
  // a specific pattern must be followed to define data values for a component
  data: function() {
    return {
      // changing the value is automatically reflected throughout the application
      name: "",
      category: "",
      price: 0,
      validationErrors: {},
      hasSubmitted: false,
    };
  },
  // section used to define watchers - this feature allows a component to receive
  // notifications when one if its data values changes
  watch: {
    name(value) {
      this.validateWatch("name", value);
    },
    category(value) {
      this.validateWatch("category", value);
    },
    price(value) {
      this.validateWatch("price", value);
    },
  },
  // - this property is used to generate values based on data properties
  // - you have to use this keyword to access the data properties
  computed: {
    errors() {
      return Object.values(this.validationErrors).length > 0;
    },
  },
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
    validateWatch(propertyName, value) {
      if (this.hasSubmitted) {
        this.validate(propertyName, value);
      }
    },
    // validating an individual data property using the imported rules
    validate(propertyName, value) {
      let errors = [];
      Object(validation)[propertyName].forEach((v) => {
        if (!v.validator(value)) {
          errors.push(v.message);
        }
      });
      if (errors.length > 0) {
        Vue.set(this.validationErrors, propertyName, errors);
      } else {
        // counterpart to he Vue.set method
        // removes a property from an object so that Vue.js is aware of it
        Vue.delete(this.validationErrors, propertyName);
      }
    },
    validateAll() {
      this.validate("name", this.name);
      this.validate("category", this.category);
      this.validate("price", this.price);
      return this.errors;
    },
    handleSubmit() {
      this.hasSubmitted = true;
      if (this.validateAll()) {
        console.log(
          `FORM SUBMITTED: ${this.name} ${this.category} ` + ` ${this.price}`
        );
      }
    },
  },
};
</script>

