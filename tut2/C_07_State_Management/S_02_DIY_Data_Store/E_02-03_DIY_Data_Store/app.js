/*
We use a JavaScript object to hold the data we want to be able to share, and we add methods 
to change/update that data rather than change it directly. 
This allows us to better understand when and how the data is being changed.

The values we are sharing now reside in a state property. 
In our Vue instances, it’s the state property that we use for our shared attribute of the data. 
And we have methods to alter the value(s) of our state: increaseValue, decreaseValue, and setValue.
*/

var sharedData = {
    devMode: true,
    state: {
        value: 1
    },
    increaseValue() {
        if (this.devMode) {
            console.log('increaseValue() called');
        }
        this.state.value++;
    },
    decreaseValue() {
        if (this.devMode) {
            console.log('decreaseValue() called');
        }
        this.state.value--;
    },
    setValue(newValue) {
        if (this.devMode) {
            console.log('setValue() called with newValue: ', newValue);
        }
        this.state.value = newValue;
    }
};


var app1 = new Vue({
    el: '#app1',
    data: {
        shared: sharedData.state,
        private: {}
    },
    template: `
    <h1>App 1 Shared Value: {{shared.value}}</h1>
  `
});

var app2 = new Vue({
    el: '#app2',
    data: {
        shared: sharedData.state,
        private: {}
    },
    methods: {
        increase: function() {
            sharedData.increaseValue();
        },
        decrease: function() {
            sharedData.decreaseValue();
        },
        reset: function() {
            sharedData.setValue(1);
        }
    },
    template: `
    <div>
      <h1>App 2 Shared Value: {{shared.value}}</h1>
      <button v-on:click='increase'>+</button>
      <button v-on:click='decrease'>-</button>
      <button v-on:click='reset'>reset</button>
    </div>
  `
});