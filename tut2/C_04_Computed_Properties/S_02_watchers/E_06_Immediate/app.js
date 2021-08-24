/*
The other option you can use with a watch is immediate. 
With immediate set to true, Vue will call the watch when your Vue instance loads with the current value. 
This way, you can be sure it fires at least once.
*/

var app = new Vue({
  el: "#app",
  data: {
    book: {
      title: "Getting to Know Vue.js",
      publisher: "Apress",
      year: 2018,
    },
  },
  watch: {
    book: {
      handler: function (newBook, oldBook) {
        console.log("Book Changed");
      },
      immediate: true,
    },
  },
  template: `
    <div>    
      <ul>
        <li v-for="(value, prop) in book">
          {{prop}}: {{value}}
        </li>
      </ul>
    </div>
    `,
});
