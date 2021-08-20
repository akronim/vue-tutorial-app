/*
It is also possible to use v-for to go through the properties of an object. Since JavaScript engines behave 
differently, there is no guarantee about the order of the properties in different browsers.

The main difference in using v-for with an object instead of an array is that, with an object, 
when you use parentheses to access the value and the index, it accepts three parameters: value, key, and index. 
The value and index represent the same things as the array. The key represents the property name.
*/


var app = new Vue({
    el: '#app',
    data: {
        book: {
            title: 'Overly Complex Story',
            price: 7.99,
            id: 3,
            genres: ['adult', 'science fiction', 'fiction'],
            action: function() {
                return 'I did an action';
            }
        }
    },
    template: `
      <ul>
        <li v-for="(prop, key, index) in book">
          {{index}}) {{key}}: {{prop}}
          <p v-if="typeof prop == 'function'">{{prop()}}</p>
          <!-- <p v-show="typeof prop == 'function'">{{prop()}}</p> -->
        </li>
      </ul>
    `
});