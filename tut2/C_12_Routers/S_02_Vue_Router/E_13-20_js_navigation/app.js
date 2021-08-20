const FourOhFour = {
  computed: {
    url: function () {
      return this.$router.currentRoute.path;
    },
  },
  template: `
  <div>
    <p>Sorry, URL not found : {{url}} </p>
    <p>¯\\_(ツ)_/¯</p>
  </div>
  `,
};

const Main = {
  template: `
    <div>
      <p>Welcome to <strong>Getting to Know Vue.js</strong></p>
    </div>
  `,
};

const Profile = {
  props: {
    user: Object,
  },
  template: `
    <div>
      <h3>User</h3>
      <p>
        Name: <strong>
                {{ user.name }}
              </strong>
      </p>
      <p>
        Email: <strong>
                {{ user.email }}
              </strong>
      </p>
    </div>
  `,
};

const ContactUs = {
  template: `
    <p>Contact Us @ <strong>Getting to Know Vue.js</strong></p>
  `,
};

const routes = [
  // Similar to redirects, aliases take the URL path to a different target, but instead of
  // moving the user to a new URL, they keep users on the same path they navigated to and show
  // the components from the defined route.
  {
    path: "/",
    name: "main",
    alias: "/main",
    component: Main,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,
  },
  {
    path: "/profile/",
    name: "profile",
    component: Profile,
    props: true,
  },
  // We can also define redirects in our router.
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/*",
    name: "notFound",
    component: FourOhFour,
  },
];

// Using JavaScript object destructuring
let router = new VueRouter({ routes });
// Using a JavaScript object with a parameter names 'routes'
// let router = new VueRouter({ routes: routes });

var app = new Vue({
  router,
  el: "#app",
  methods: {
    // We can use the router instance to push a new navigation event onto the stack
    goToContactUs: function () {
      this.$router.push("contact-us");
    },
    // which is the same as:
    goToContactUs2: function () {
      this.$router.push({ path: "contact-us" });
    },
    // We can also navigate by passing an object that defines the name of the path
    goToContactUs3: function () {
      this.$router.push({ name: "contact-us" });
    },
    // We can also push a new route with parameters.
    goToContactUs3: function () {
      this.$router.push({
        name: "profile",
        params: {
          user: {
            name: "Getting to Know Vue.js",
            email: "gettingToKnowVuejs@Apress.com",
          },
        },
      });
    },
  },
  template: `
    <div id="app">
      <div id="nav">
        <router-link 
          to="/">
            Home
        </router-link> |
        <router-link 
          to="/contact-us">
            Contact Us
        </router-link> |
        <router-link 
          v-bind:to="{ 
              name : 'profile', 
              params: { user: { 
                  name: 'Getting to Know Vue.js', 
                  email : 'gettingToKnowVuejs@Apress.com'
                } 
              } 
            }">
            Profile
        </router-link>
      </div>
      <router-view/>

      <button v-on:click="goToContactUs">Go to Contact Us</button>
    </div>
    `,
});
