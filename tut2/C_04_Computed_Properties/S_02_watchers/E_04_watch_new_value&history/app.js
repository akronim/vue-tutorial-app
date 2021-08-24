var app = new Vue({
  el: "#app",
  data: {
    searchText: "",
    results: [],
    history: {},
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
          this.history[this.searchText] = this.results;
        });
    },
  },
  watch: {
    searchText: function (newSearchText, oldSearchText) {
      if (this.history[newSearchText]) {
        this.results = this.history[newSearchText];
      } else {
        this.search();
      }
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
