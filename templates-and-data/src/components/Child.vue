<template>
  <div class="bg-primary text-white text-center m-2 p-3 h6">
    {{ message }}
    <div class="form-group m-1">
      <div class="form-group m-1 text-left">
        <label>{{ labelText }}</label>
        <!-- text interpolation binding and the v-model directive -->
        <input v-model="message" class="form-control" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  // props are received from the parent component
  // we add a prop using an array of strings
  // to modify the prop's value you must use a data or computed property
  props: ["labelText", "initialValue"],
  data: function () {
    return {
      // to modify the prop's value you must use a data or computed property
      message: this.initialValue,
    };
  },
};
</script>

<!-- The scoped attribute tells Vue.js that the styles should be applied only to 
the elements in the current component’s template element and not to elements 
in the templates of other components. -->
<style scoped>
div {
  border: 5px solid red;
}
</style>