<template>
  <div>
    <!-- binding to radio buttons and checkboxes -->
    <div class="container-fluid">
      <div class="bg-info m2 p-2 text-white">
        <div>Name: {{name}}</div>
        <div>Has Admin Access: {{hasAdminAccess}}</div>
      </div>

      <div class="bg-primary m-2 p-2 text-white">
        <div class="form-check">
          <!-- radio button must be configured with a "value" attribute -->
          <input class="form-check-input" type="radio" v-model="name" value="Bob" />
          <label class="form-check-label">Bob</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="name" value="Alice" />
          <label class="form-check-label">Alice</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" v-model="hasAdminAccess" />
          <label class="form-check-label">Has Admin Access?</label>
        </div>
      </div>
    </div>

    <!-- binding to radio buttons and checkboxes with v-for -->
    <div class="container-fluid">
      <div class="bg-info m2 p-2 text-white">
        <div>Name 2: {{name}}</div>
      </div>

      <div class="bg-primary m-2 p-2 text-white">
        <div class="form-check" v-for="n in allNames" v-bind:key="n">
          <input class="form-check-input" type="radio" v-model="name" v-bind:value="n" />
          <label class="form-check-label">{{n}}</label>
        </div>
      </div>
    </div>

    <!-- binding to select elements -->
    <div class="container-fluid">
      <div class="bg-info m2 p-2 text-white">
        <div>Name 3: {{name}}</div>
      </div>

      <div class="bg-primary m-2 p-2 text-white">
        <div class="form-group">
          <label>Selected Names</label>
          <select class="form-control" v-model="name">
            <option value="all">Everyone</option>
            <option v-for="n in allNames" v-bind:key="n" v-bind:value="n">Just {{n}}</option>
          </select>
        </div>
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
      name: "Bob",
      hasAdminAccess: true,
      allNames: ["Bob", "Alice", "Joe"],
    };
  },
};
</script>




