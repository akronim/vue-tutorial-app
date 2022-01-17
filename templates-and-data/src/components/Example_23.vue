<template>
  <div class="container-fluid">
    <div class="bg-info m2 p-2 text-white">{{name}}</div>
    <div class="bg-info m2 p-2 text-white">{{password}}</div>
    <div class="bg-info m2 p-2 text-white">{{details}}</div>

    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-group">
        <label>Name</label>
        <input class="form-control" v-model="name" />
      </div>
    </div>

    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
    </div>

    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-group">
        <label>Details</label>
        <textarea class="form-control" v-model="details" />
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
      password: "secret",
      details: "Has admin access",
    };
  },
};
</script>




