var store = new Vuex.Store({
  /* 
    state contains all the data we are sharing with Vuex. 
    Since our Vue apps will only have a single Vuex instance, the state is a single JavaScript object 
    that contains the state for the entire app.
    */
  state: {
    ship: {},
    ships: { count: 0, results: [] },
    pilots: [],
  },
  /* 
    Getters offer a way to consolidate results that is based on the data in the store. 
    One way to think of a getter is as a computed property that is exposed through the store, 
    thereby allowing it to be reused in multiple Vue components. In the vein of computed properties, 
    the results of most getters are cached.
    A getter function receives two parameters: state and getters. 
    The state function is used to access the values of the store. 
    The getters function can be used to combine results of other getters, thereby allowing us to build more complicated results in smaller portions.
    */
  getters: {
    onlyStarFighters: function (state) {
      return state.ships.results.filter(function (ship) {
        return ship.starship_class === "Starfighter";
      });
    },
    onlyStarFightersCount: function (state, getters) {
      return getters.onlyStarFighters.length;
    },
    /*
         A getter that returns a function. That function accepts the url parameter and then returns 
         the ship with that url.

         getters that return a function are evaluated every time they are accessed.
        */
    setShip: function (state) {
      return function (url) {
        return state.ships.results.find(function (ship) {
          return ship.url === url;
        });
      };
    },
  },
  /* 
    The only way to change the value of the store is through a mutation. A mutation consists of a string type 
    and a handler function. 
    One way to think of the type is that it’s like the name for the handler. 
    The handler is a function that accepts at least one parameter, state, and can have a second parameter 
    called payload. If multiple values need to be passed to the mutation, we can use an object.
    Since every mutation is logged to track changes, all mutations must be synchronous. 
    If a mutation needs to perform an action that is asynchronous due to using a callback or promise, 
    the logic should probably be moved to an action.

    To invoke, or call, a mutation, we call commit on the store object. When we call commit, we can pass it 
    the type, or name, of the mutation to call and a payload, or we can pass it an object that has a property 
    named type. The rest of the object will be the payload.
    */
  mutations: {
    setShips: function (state, payload) {
      state.ships = payload.newShips;
    },
    setShip: function (state, payload) {
      state.ship = payload.newShip;
    },
    clearPilots: function (state) {
      state.pilots = [];
    },
    addPilot: function (state, payload) {
      state.pilots.push(payload.newPilot);
    },
  },
  /*
    An action can be asynchronous. Any task that might require a callback or a wait period such as calling 
    a server should be an action.
    When the asynchronous task is done, we will be able to call commit with the results. This will preserve 
    the transaction history of our Vuex and still allow us all those fun calls to servers.
    Actions follow the same format as mutations with a string type, or name, and a handler function. 
    
    The handler function accepts two parameters: context and payload. The context parameter contains 
    the same properties and methods as the store does in a mutation, allowing us to access the state 
    and commit mutations.
    To call, or invoke, an action, we follow the same format as when committing a mutation, 
    except we call dispatch on the store.
    */
  actions: {
    search: function (context, payload) {
      axios
        .get(`https://swapi.dev/api/starships?search=${payload.searchText}`)
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
    getPilots: function (context, payload) {
      payload.urls.forEach(function (url) {
        axios.get(url).then((response) => {
          context.commit("addPilot", { newPilot: response.data });
        });
      });
    },
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
      return this.$store.state.ships.results;
    },
    shipCount: function () {
      return this.$store.state.ships.count;
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
      <input type="text" v-model="searchText" v-on:keyup.enter="search" /></label>
  
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
      return this.$store.state.ship;
    },
    ships: function () {
      return this.$store.state.ships.results;
    },
    shipCount: function () {
      return this.$store.state.ships.count;
    },
    starfightersCount: function () {
      return this.$store.getters.onlyStarFightersCount;
    },
    pilots: function () {
      return this.$store.state.pilots;
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
        <input type="text" v-on:keyup.enter="search" />
        </label>
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
