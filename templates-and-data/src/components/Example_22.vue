<template>
  <div class="container-fluid">
    <div class="bg-info m2 p-2 text-white">Value: {{dataValue}}</div>
    <div class="bg-info m2 p-2 text-white">Other Value: {{otherValue || "(Empty)"}}</div>

    <!-- two-way binding : checkbox-->
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-check">
        <label class="form-check-label">
          <input
            class="form-check-input"
            type="checkbox"
            v-on:change="handleChange"
            v-bind:checked="dataValue"
          />
          Data Value
        </label>
      </div>
    </div>

    <!-- two-way binding : text-->
    <div class="bg-primary m-2 p-2">
      <input type="text" class="form-control" v-on:input="handleChange" v-bind:value="otherValue" />
    </div>

    <!-- two-way binding : simplified with Vue.js BEGIN-->
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="dataValue" />
          Data Value
        </label>
      </div>
    </div>

    <div class="bg-primary m-2 p-2">
      <input type="text" class="form-control" v-model="otherValue" />
    </div>
    <!-- two-way binding : simplified with Vue.js END-->

    <div class="text-center m-2">
      <button class="btn btn-secondary" v-on:click="reset">Reset</button>
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
      dataValue: false,
      otherValue: "",
    };
  },
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
    reset() {
      this.dataValue = false;
      this.otherValue = "";
    },
    handleChange($event) {
      if ($event.target.type == "checkbox") {
        this.dataValue = $event.target.checked;
      } else {
        this.otherValue = $event.target.value;
      }
    },
  },
};
</script>




