<template>
  <div class="container-fluid">
    <div class="bg-primary p-4 text-white h3">{{message}}</div>
    <input class="form-control bg-light" placeholder="Type here..." v-on:keydown.ctrl="handleKey" />
    <input class="form-control bg-light" placeholder="Type here..." v-on:keydown.ctrl.exact="handleKey" />
  </div>
</template>

<script>
// component's configuration object
export default {
  // The Vue DevTools browser extension uses the optional "name" property to show
  // the structure of the application
  name: "MyComponent",
  // a specific pattern must be followed to define data values for a component
  data: function () {
    return {
      // changing the value is automatically reflected throughout the application
      message: "Ready",
    };
  },
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
    handleKey($event) {
      this.message = $event.key;
    },
  },
};
</script>

