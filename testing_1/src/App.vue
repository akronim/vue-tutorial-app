<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/"> Home </router-link>
      </li>
      <li>
        <router-link to="/foo"> Foo </router-link>
      </li>
      <li>
        <router-link to="/bar"> Bar </router-link>
      </li>
      <li>
        <router-link to="/nested-route"> Nested </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style></style>
