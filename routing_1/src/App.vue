<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col m-2">
        <!-- The Vue Router uses the router-view element to display content-->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("getProductsAction");
  },
};
</script>