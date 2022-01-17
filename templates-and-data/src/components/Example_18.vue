<!-- components are defined with:
  1) template element
  2) script element
  3) style element
 -->

<!-- the once modifier stops v-on directive from invoking its method
more than once -->
<template>
  <div class="container-fluid">
    <div id="outer-element" class="bg-primary p-4 text-white h3" v-on:click="handleClick">
      Outer element
      <div id="middle-element" class="bg-secondary p-4" v-on:click="handleClick">
        Middle element
        <div id="inner-element" class="bg-info p-4" v-on:click.once="handleClick">Inner Element</div>
      </div>
    </div>
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
      name: "Lifejacket",
    };
  },
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
    handleClick($event) {
      console.log(
        `target: ${$event.target.id} | currentTarget: ${$event.currentTarget.id}`
      );

      // target: element that triggered the event
    },
  }
};
</script>



