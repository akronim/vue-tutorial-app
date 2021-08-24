<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Test v-bind:header="header" />
    <Test2 v-bind:header="header" />
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import Test2 from "./components/Test2.vue";
export default {
  name: "app",
  components: {
    Test,
    Test2,
  },
  data() {
    return {
      header: "initial header",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
