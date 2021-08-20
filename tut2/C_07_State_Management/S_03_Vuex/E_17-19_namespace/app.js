/* 
At some point, you may need to specify which specific modules
should handle an action, getter, or mutations.
To namespace a module, add namespaced: true as one of its properties and
you’re done… almost. Now to access the mutations from outside the module,
you call commit('moduleName/mutationName'). To access an action, we call
dispatch('moduleName/actionName'). And to access a getter, we have to use
getters['moduleName/getterName']. Notice we are using the bracket notation to access
the getter since JavaScript dot notation will not let us use the / special character.
Inside the module, we can use either the namespace method to access the
mutations, actions, and getters or we can call them without the namespacing.
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
    /* 
      This is how we access the clearPilots mutations and the getPilots
      action from the shipsModule now that the pilotsModule is using a namespace
    */
    setShip: function (context, payload) {
      context.commit("pilots/clearPilots");
      context.commit("setShip", {
        newShip: context.getters.setShip(payload.url),
      });
      context.dispatch("pilots/getPilots", { urls: context.state.ship.pilots });
    },
  },
};

var pilotsModule = {
  namespaced: true,
  //everything else stays the same
  state: {
    pilots: [],
  },
  getters: {
    // pilotsWithShipName: function (state, getters, rootState) {
    //   return state.pilots.map(function (pilot) {
    //     return `${pilot.name} the pilot of ${rootState.ships.ship.name}`;
    //   });
    // },

    // Using rootGetters to Access Getters in Different Modules
    pilotsWithShipName: function (state, getters, rootState, rootGetters) {
      return state.pilots.map(function (pilot) {
        return `${
          pilot.name
        } flies ${rootGetters.getShipsWithPilotId(pilot.url).length} number of
      the current ships`;
      });
    },
  },
  mutations: {
    clearPilots: function (state) {
      state.pilots = [];
    },
    addPilot: function (state, payload) {
      state.pilots.push(payload.newPilot);
    },
  },
  actions: {
    // getPilots: function (context, payload) {
    //   payload.urls.forEach(function (url) {
    //     axios.get(url).then((response) => {
    //       context.commit("addPilot", { newPilot: response.data });
    //     });
    //   });
    // },

    /* 
    We can also decide to make an action globally available by registering it as such. To
    register an action as global, we change the definition of the action from a function to an
    object with two properties: root and handler. The handler property will be the function
    that we used to have assigned to the action. The root property will be set to true.
    */
    getPilots: {
      root: true,
      handler: function (context, payload) {
        payload.urls.forEach(function (url) {
          axios.get(url).then((response) => {
            context.commit("addPilot", { newPilot: response.data });
          });
        });
      },
    },
  },
};

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
