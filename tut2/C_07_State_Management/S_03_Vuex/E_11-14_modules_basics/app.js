/* 
 Vuex allows us to declare a store in modules. Each module is like a mini-Vuex declaration 
 with its own state, getters, mutations, and actions.

These modules allow us to break up our data store into manageable chucks the same
way we would split up any larger programming issue into smaller, more manageable
portions.
*/

/* 
Inside the module we use the state to access the current state properties
*/
var shipsModule = {
  state: {
    ship: {},
    ships: { count: 0, results: [] },
  },
  getters: {
    onlyStarFighters: function (state) {
      return state.ships.results.filter(function (ship) {
        return ship.starship_class === "Starfighter";
      });
    },
    onlyStarFightersCount: function (state, getters) {
      return getters.onlyStarFighters.length;
    },
    setShip: function (state) {
      return function (url) {
        return state.ships.results.find(function (ship) {
          return ship.url === url;
        });
      };
    },
  },
  mutations: {
    setShips: function (state, payload) {
      state.ships = payload.newShips;
    },
    setShip: function (state, payload) {
      state.ship = payload.newShip;
    },
  },
  actions: {
    search: function (context, payload) {
      axios
        .get(`https://swapi.dev/api/starships/?search=${payload.searchText}`)
        .then((response) => {
          context.commit("setShips", { newShips: response.data });
        });
    },
    setShip: function (context, payload) {
      context.commit("clearPilots");
      context.commit("setShip", {
        newShip: context.getters.setShip(payload.url),
      });
      context.dispatch("getPilots", { urls: context.state.ship.pilots });
    },
  },
};

var pilotsModule = {
  state: {
    pilots: [],
  },
  getters: {},
  mutations: {
    clearPilots: function (state) {
      state.pilots = [];
    },
    addPilot: function (state, payload) {
      state.pilots.push(payload.newPilot);
    },
  },
  actions: {
    getPilots: function (context, payload) {
      payload.urls.forEach(function (url) {
        axios.get(url).then((response) => {
          context.commit("addPilot", { newPilot: response.data });
        });
      });
    },
  },
};

/* 
Outside the module to access our state from shipsModule, we will now need to use
this.$store.state.ships to get access to the ships state and use this.$store.state.
pilots to access the pilots state.
*/

var store = new Vuex.Store({
  modules: {
    ships: shipsModule,
    pilots: pilotsModule,
  },
});

var app1 = new Vue({
  el: "#app1",
  data: {
    searchText: "",
  },
  store,
  computed: {
    ships: function () {
      return this.$store.state.ships.ships.results;
    },
    shipCount: function () {
      return this.$store.state.ships.ships.count;
    },
  },
  methods: {
    search: function () {
      this.$store.dispatch("search", { searchText: this.searchText });
    },
  },
  template: `
      <div>
      <h1>App1</h1>
      <label>Search:
      <input type="text" v-model="searchText" v-on:keyup.enter.esc="search" /></label>
  
      <h5>Results: <small>{{shipCount}}</small></h5>
      
      <ul>
        <li v-for="ship in ships">
          {{ship.name}}
        </li>
      </ul>
      </div>
      `,
});

var app2 = new Vue({
  el: "#app2",
  data: {},
  store,
  computed: {
    currentShip: function () {
      return this.$store.state.ships.ship;
    },
    ships: function () {
      return this.$store.state.ships.ships.results;
    },
    shipCount: function () {
      return this.$store.state.ships.ships.count;
    },
    starfightersCount: function () {
      return this.$store.getters.onlyStarFightersCount;
    },
    pilots: function () {
      return this.$store.state.pilots.pilots;
    },
  },
  methods: {
    search: function (event) {
      store.dispatch("search", { searchText: event.target.value });
    },
    viewShip: function (url) {
      this.$store.dispatch({ type: "setShip", url: url });
    },
  },
  template: `
      <div>
        <h1>App2</h1>
        <label>Search:
        <input type="text" v-on:keyup.enter.esc="search" /></label>
    
        <h5>Results: <small>{{shipCount}}</small></h5>
        <h5>Starfighters Count: <small>{{starfightersCount}}</small></h5>
        
        <ul>
          <li v-for="ship in ships">
            {{ship.name}} <button v-on:click="viewShip(ship.url)">view</button>
          </li>
        </ul>

        <div v-show="currentShip.name">
          <h2>Current Ship</h2>
          <h3>Name: <small>{{currentShip.name}}</small></h3>
          <h3>Manufacturer: <small>{{currentShip.manufacturer}}</small></h3>
          <h3>Class: <small>{{currentShip.starship_class}}</small></h3>
          <h3>Crew Size: <small>{{currentShip.crew}}</small></h3>

          <h2>Pilots</h2>
          <ul>
            <li v-for="pilot in pilots">
              <h3>Name: <small>{{pilot.name}}</small></h3>
            </li>
          </ul>
        </div>
      </div>
      `,
});
