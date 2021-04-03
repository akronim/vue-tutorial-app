<template>
  <div id="app">
    <h1>Button Clicks: {{ counter }}</h1>
    <button v-on:click="incrementCounter">Press Me</button>
    <div id="nav">
      <router-link to="/l4/e1/Home">Home</router-link>|
      <router-link to="/l4/e1/About">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  // not a valid statement
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      // debugger; // eslint-disable-line no-debugger
      this.counter++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
