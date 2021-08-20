/*
Some objects are more complex than a search string but still require a watch. 
We can use the deep property to watch the nested properties of an object. 
To set deep to true, we will set our watch to an object with two properties: handler is the function 
that gets called when the watch is triggered and deep is set to true so we can monitor changes in the object.
*/

var app = new Vue({
    el: '#app',
    data: {
        book: {
            title: 'Getting to Know Vue.js',
            publisher: 'Apress',
            year: 2018
        }
    },
    watch: {
        book: {
            handler: function(newBook, oldBook) {
                console.log('Book Changed');
            },
            deep: true
        }
    },
    template: `
    <div>
    <label>Search:
    <input type="text" v-model="book.title" /></label>
    
    <ul>
      <li v-for="(value, prop) in book">
        {{prop}}: {{value}}
      </li>
    </ul>
    </div>
    `
});