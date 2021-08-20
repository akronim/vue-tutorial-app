/*
To bind a CSS class, we use the v-bind:class directive on the element we want the class to be applied to. 
We provide it an object in the expression that has the name of the CSS class we want applied as property names 
and the condition that evaluates to true or false as the value.

v-bind:class="{ cssClass : true == true }"
*/

var app = new Vue({
    el: '#app',
    data: {
        input: '',
        inputError: null
    },
    watch: {
        input: function() {
            var results = parseInt(this.input);
            if (isNaN(results)) {
                this.inputError = true;
            } else {
                this.inputError = false;
            }
        }
    },
    template: `
  <div>
    <h4>Please Enter an Integer</h4>
    <input type="text" v-model="input" v-bind:class="{ error : inputError }" />
  </div>
  `
});