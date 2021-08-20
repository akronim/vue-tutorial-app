<template>
  <!--  
        - routing system will be responsible for managing the content 
        - it displays a component based on the configuration
  -->
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    // mapping "getData" to a method
    ...mapActions({
      getData: "getData",
      initializeCart: "cart/initializeCart",
    }),
  },
  // invoked when the component is created
  created() {
    this.getData();
    this.initializeCart(this.$store);
  },
};
</script>
