<template>
  <!-- This component displays a value obtained by the URL of the current route
  (value returned from the HTTP POST request)-->
  <div class="m-2 text-center">
    <h2>Thanks!</h2>
    <p>Thanks for placing your order, which is #{{orderId}}.</p>
    <p>We'll ship your goods as soon as possible.</p>
    <router-link to="/" class="btn btn-primary">Return to Store</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    orderId() {
      // this.$route is available in all components when the Vue Router
      // package is enabled
      return this.$route.params.id;
    },
  },
};
</script>