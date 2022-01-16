<template>
  <!-- example 13 : handling events -->
  <!-- v-on -->
  <div class="container-fluid">
    <div class="bg-primary text-white m-2 p-3 text-center">
      <h3 v-on:click="name = 'Clicked!'">{{name}}</h3>
    </div>

    <div class="bg-primary text-white m-2 p-3 text-center">
      <h3 v-on:click="name = $event.type">{{name}}</h3>
    </div>

    <div class="bg-primary text-white m-2 p-3 text-center">
      <h3 v-on:click="handleEvent">{{name}}</h3>
    </div>

    <div class="bg-primary text-white m-2 p-3 text-center">
      <h3 v-on:click="handleEvent_B('Soccer Ball', $event)">{{name}}</h3>
    </div>

    <!-- directive shorthand -->
    <div class="bg-primary text-white m-2 p-3 text-center">
      <h3 @click="handleEvent_B('Stadium', $event)">{{name}}</h3>
    </div>

    <div class="container-fluid">
      <h3 class="bg-primary text-white text-center mt-2 p-2">{{message}}</h3>
      <table class="table table-sm table-striped table-bordered">
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Actions</th>
          <th>Actions 2</th>
        </tr>
        <tbody>
          <tr v-for="(name, index) in names" v-bind:key="name">
            <td>{{ index }}</td>
            <td>{{ name }}</td>
            <td>
              <button
                class="btn btn-sm bg-primary text-white"
                v-on:click="handleClick_C(name)"
                v-on:mousemove="handleMouseEvent_C(name, $event)"
                v-on:mouseleave="handleMouseEvent_C(name, $event)"
              >Select</button>
            </td>
            <td>
              <!-- 
                - another way to listen for multiple events 
              - passing arguments to the methods is not supported-->
              <button
                class="btn btn-sm bg-primary text-white"
                v-on="buttonEvents"
                v-bind:data-name="name"
              >Select</button>
            </td>
          </tr>
        </tbody>
      </table>
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
      message: "Ready",
      names: ["Kayak", "Lifejacket", "Soccer Ball", "Stadium"],
      buttonEvents: {
        click: this.handleClick_D,
        mouseleave: this.handleMouseEvent_D,
        mousemove: this.handleMouseEvent_D,
      },
    };
  },
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
    handleEvent($event) {
      this.name = $event.type + " " + $event.target.nodeName;
    },
    handleEvent_B(name, $event) {
      this.name = `${name} - ${$event.type}`;
    },
    handleClick_C(name) {
      this.message = `${name}`;
    },
    handleMouseEvent_C(name, $event) {
      if ($event.type == "mousemove") {
        this.message = `Move in ${name} ${this.counter++}`;
      } else {
        this.counter = 0;
        this.message = "Ready";
      }
    },
    handleClick_D($event) {
      let name = $event.target.dataset.name;
      this.message = `${name}`;
    },
    handleMouseEvent_D($event) {
      let name = $event.target.dataset.name;
      if ($event.type == "mousemove") {
        this.message = `Move in ${name} ${this.counter++}`;
      } else {
        this.counter = 0;
        this.message = "Ready";
      }
    },
  }
};
</script>





