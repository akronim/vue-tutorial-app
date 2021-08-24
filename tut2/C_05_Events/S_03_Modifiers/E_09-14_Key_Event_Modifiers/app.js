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
  template: `
      <div>
      <label>Search:
        <input 
            type="text" 
            v-model="searchText" 
            v-on:keyup.enter.esc="search" />
      </label>
  
      <h5>Results: <small>{{results.length}}</small></h5>
      
      <ul>
        <li v-for="result in results">
          {{result}}
        </li>
      </ul>
      </div>
      `,
});
