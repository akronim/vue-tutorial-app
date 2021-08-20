<template>
  <!-- example 2 -->
  <div class="bg-primary text-white text-center m-2 p-3">
    <!-- you can use more complex JS statements in data bindings, but it is
    not recommended (you cannot invoke functions or perform complex tasks 
    in data binding and you can access only the data defined by this component)-->
    <h4>Price: ${{ (price + (price * (lowTaxRate/100))).toFixed(2) }}</h4>

    <!-- better ... -->
    <h4>Price: {{ totalPrice | currency(3) }} (Low Rate)</h4>

    <h4>Price: {{ getTotalPrice(highTaxRate) | currency }} (High Rate)</h4>
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
      price: 48.95,
      lowTaxRate: 12,
      highTaxRate: 20,
    };
  },
  // - this property is used to generate values based on data properties
  // - you have to use this keyword to access the data properties
  computed: {
    totalPrice: function () {
      let tp = this.price + this.price * (this.lowTaxRate / 100);

      // it is a bad practice to include statements in a computed property's
      // function that make changes
      // console.log(`Counter: (${this.counter++})`);

      return tp;
    },
  },
  // we can define a method to compute a value (better approach if it allows us to
  // reuse the same code)
  // - methods are able to define parameters
  methods: {
    getTotalPrice(taxRate) {
      return this.price + this.price * (taxRate / 100);
    },
  },
  // functions used to format the result of an expression
  filters: {
    // functions used for filters cannot access the rest of component's data
    currency(value, places = 2) {
      // Intl object provides access to localized formatting
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: places,
        maximumFractionDigits: places,
      }).format(value);
    },
  },
};
</script>