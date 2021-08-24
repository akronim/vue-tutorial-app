/*
Occasionally you need to take action when data changes. Rather than tie a call to the server into 
a computed property, a watch can help you decouple your user input from more expensive tasks.
*/

var app = new Vue({
  el: "#app",
  data: {
    searchText: "",
    results: [],
  },
  methods: {
    search: function () {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts?userId=${parseInt(
            this.searchText
          )}`
        )
        .then((response) => {
          this.results = response.data;
        });
    },
  },
  watch: {
    searchText: function (newSearchText, oldSearchText) {
      this.search();
    },
  },
  template: `
    <div>
    <label>Search:
    <input type="text" v-model="searchText" /></label>

    <h5>Results: <small>{{results.length}}</small></h5>
    
    <ul>
      <li v-for="result in results">
        {{result}}
      </li>
    </ul>
    </div>
    `,
});
