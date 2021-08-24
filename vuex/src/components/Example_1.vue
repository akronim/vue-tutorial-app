<template>
  <div class="container-fluid">
    <!-- error-display element -->
    <div class="row">
      <div class="col">
        <error-display />
      </div>
    </div>
    <div class="row">
      <div class="col-8 m-3">
        <product-display />
      </div>
      <div class="col m-3">
        <product-editor />
      </div>
    </div>
  </div>
</template>

<script>
import ProductDisplay from "./ProductDisplay";
import ProductEditor from "./ProductEditor";
import ErrorDisplay from "./ErrorDisplay";

export default {
  name: "App",
  components: { ProductDisplay, ProductEditor, ErrorDisplay },
};
</script>