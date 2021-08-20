<template>
  <div v-if="show" class="text-danger">
    <div v-for="m in messages" v-bind:key="m">{{ m }}</div>
  </div>
</template>

<script>
// Vuelidate is distributed as a Vue.js plugin that must be registered with the
// Vue.use method before the Vue object is created

// We use it in Checkout.vue
export default {
  // object received by this component's "validation" prop
  props: ["validation"],
  computed: {
    // $dirty: the element has been edited by the user
    // $invalid:
    show() {
      return this.validation.$dirty && this.validation.$invalid;
    },
    messages() {
      let messages = [];
      if (this.validation.$dirty) {
        // validator "required"
        if (this.hasValidationError("required")) {
          messages.push("Please enter a value");
        } else if (this.hasValidationError("email")) {
          // validator "email"
          messages.push("Please enter a valid email address");
        }
      }
      return messages;
    },
  },
  methods: {
    hasValidationError(type) {
      return (
        // this.validation.$params.hasOwnProperty(type) && !this.validation[type]
        Object.prototype.hasOwnProperty.call(this.validation.$params, type) &&
        !this.validation[type]
      );
    },
  },
};
</script>
