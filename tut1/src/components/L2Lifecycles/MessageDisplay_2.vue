<template>
  <div class="bg-dark text-light text-center p-2">
    <button class="btn btn-secondary" v-on:click="generateError">Generate Error</button>
  </div>
</template>


<script>
export default {
  data: function () {
    return {
      generate_error: false,
    };
  },
  created: function () {
    console.log("MessageDisplay: created");
  },
  beforeDestroy: function () {
    console.log("MessageDisplay: beforeDestroy");
  },
  destroyed: function () {
    console.log("MessageDisplay: destroyed");
  },
  methods: {
    generateError() {
      this.generate_error = true;
      throw "My Component Error";
    },
  }
};
</script>