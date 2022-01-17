<template>
  <div>
    <!-- v-model : formating values as numbers -->
    <div class="container-fluid">
      <div class="bg-info m2 p-2 text-white">
        <div>Amount: {{amount}}, Amount + 10: {{amount + 10}}</div>
      </div>
      <div class="form-group">
        <label>Amount</label>
        <!-- "number" modifier tells the v-model directive to convert the value
        entered to a number before using it to update the application-->
        <input class="form-control" type="number" v-model.number="amount" />
      </div>

      <div class="form-group">
        <label>Amount</label>
        <!-- "lazy" : update occurs when the input element loses the focus-->
        <input class="form-control" type="number" v-model.number.lazy="amount" />
      </div>

      <!-- trim -->
      <div class="bg-info m2 p-2 text-white">
        <div>Name: **{{name}}**</div>
      </div>
      <div class="form-group">
        <label>Name</label>
        <input class="form-control" type="text" v-model.trim="name" />
      </div>

      <!-- binding to different data types -->
      <div class="bg-info m2 p-2 text-white">
        <div>Selected Cities: {{cities}}</div>
      </div>

      <div class="bg-primary m-2 p-2 text-white">
        <div class="form-check m-2" v-for="city in cityNames" v-bind:key="city">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" v-model="cities" v-bind:value="city" />
            {{city}}
          </label>
        </div>
        <div class="text-center">
          <button v-on:click="reset" class="btn btn-info">Reset</button>
        </div>
      </div>

      <!-- binding to different data types 2 -->
      <div class="bg-info m2 p-2 text-white">
        <div>Selected Cities: {{cities}}</div>
      </div>

      <div class="bg-primary m-2 p-2 text-white">
        <div class="form-group">
          <select multiple class="form-control" v-model="cities">
            <option v-for="n in cityNames" v-bind:key="n" v-bind:value="n">{{n}}</option>
          </select>
        </div>
        <div class="text-center">
          <button v-on:click="reset" class="btn btn-info">Reset</button>
        </div>
      </div>

      <!-- toggling -->
      <div class="m2 p-2 text-white" v-bind:class="elemClass">
        <div>Value: {{elemClass}}</div>
      </div>
      <div class="form-check m-2">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" v-model="dataValue" />
          Dark Color
        </label>
      </div>

      <!-- toggling simplified : computed propery is not required -->
      <div class="m2 p-2 text-white" v-bind:class="classValue">
        <div>Value: {{classValue}}</div>
      </div>
      <div class="form-check m-2">
        <label class="form-check-label">
          <input
            type="checkbox"
            class="form-check-input"
            v-model="classValue"
            true-value="bg-primary"
            false-value="bg-info"
          />
          Dark Color
        </label>
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
      amount: 100,
      name: "Bob",
      cityNames: ["London", "New York", "Paris", "Berlin"],
      cities: [],
      dataValue: false,
      classValue: "bg-info",
    };
  },
  // - this property is used to generate values based on data properties
  // - you have to use this keyword to access the data properties
  computed: {
    elemClass() {
      return this.dataValue ? "bg-primary" : "bg-info";
    },
  },
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
    reset() {
      this.cities = [];
    },
  },
};
</script>




