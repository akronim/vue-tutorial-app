<!-- mouse event modifiers -->
<template>
  <div class="container-fluid">
    <div id="A-element" class="bg-primary p-4 text-white h3" v-on:mousedown.right="handleClick">A</div>
    <div id="B-element" class="bg-secondary p-4 text-white h3" v-on:mousedown.middle="handleClick">B</div>
    <div id="C-element" class="bg-info p-4 text-white h3" v-on:mousedown.left="handleClick">C</div>
  </div>
</template>

<script>
// component's configuration object
export default {
  // The Vue DevTools browser extension uses the optional "name" property to show
  // the structure of the application
  name: "MyComponent",
  methods: {
    handleClick($event) {
      console.log(
        `target: ${$event.target.id} | currentTarget: ${$event.currentTarget.id}`
      );

      // target: element that triggered the event
    },
  },
};
</script>



