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

// we use the $route property to access the parameters
const Profile = {
  template: `
    <p>
      User Name: <strong>
        {{ $route.params.userName }}
      </strong>
    </p>
  `,
};

const ContactUs = {
  template: `
    <p>Contact Us @ <strong>Getting to Know Vue.js</strong></p>
  `,
};

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,
  },
  {
    // Setting up a Route to accept a Parameter named userName
    path: "/profile/:userName",
    name: "profile",
    component: Profile,
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
          to="/profile/Getting to Know Vue.js">
            Profile
        </router-link>
      </div>
      <router-view/>
    </div>
    `,
});
