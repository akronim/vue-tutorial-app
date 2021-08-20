<!-- the root component that orchestrates the rest of the application -->

<!-- components are defined with:
  1) template element
  2) script element
  3) style element
 -->

<template>
  <div>
    <Content></Content>
    <!-- routing system will be responsible for managing the content -->
    <router-view />
  </div>
</template>

<script>
import Content from "./components/Content";

export default {
  // The Vue DevTools browser extension uses the optional "name" property to show
  // the structure of the application
  name: "App",
  components: {
    Content,
  },
};
</script>