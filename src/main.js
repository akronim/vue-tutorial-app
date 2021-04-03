// code that initializes a Vue.js application

// ### 1: no Vue.js version
// require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

// let counter = 1;

// let container = document.createElement("div");
// container.classList.add("text-center", "p-3");

// let msg = document.createElement("h1");
// msg.classList.add("bg-primary", "text-white", "p-3");
// msg.textContent = "Button Not Pressed";

// let button = document.createElement("button");
// button.textContent = "Press Me";
// button.classList.add("btn", "btn-secondary");
// button.onclick = () => msg.textContent = `Button Presses: ${counter++}`;

// container.appendChild(msg);
// container.appendChild(button);

// let app = document.getElementById("app");
// app.parentElement.replaceChild(container, app);

// ### Vue.js version 1 (default)
// import Vue from "vue";
// import App from "./App.vue";

// import "bootstrap/dist/css/bootstrap.min.css";

// Vue.config.productionTip = false;

// import router from "./router"; // not default

// new Vue({
//   render: (h) => h(App),
//   router, // not default
// }).$mount("#app");

// ### Vue.js version 2
// require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
// import Vue from 'vue'

// new Vue({
//   el: "#app",
//   template: `<div class="text-center p-3">
//                 <h1 class="bg-primary text-white p-3">
//                     {{message}}
//                 </h1>
//                 <button class="btn btn-secondary" v-on:click="handleClick">
//                   Press Me
//                 </button>
//             </div>`,
//   data: {
//     counter: 0
//   },
//   methods: {
//     handleClick() {
//       this.counter++;
//     }
//   },
//   computed: {
//     message() {
//       return this.counter == 0 ?
//         "Button Not Pressed" : `Button Presses: ${this.counter}`;
//     }
//   }
// });

// ### Vue.js version 3
// require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

// import Vue from 'vue';
// import MyComponent from "./App";

// import router from "./router";

// new Vue({
//   el: "#app",
//   components: { "custom": MyComponent },
//   template: `<div class="text-center p-3">
//                 <h1 class="bg-primary text-white p-3">
//                     This is the main.js file
//                 </h1>
//                 <custom />
//             </div>`,
//   router
// });

// ### Vue.js version 4
require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

// import Vue from "vue";
// import MyComponent from "./App";
// import router from "./router";

// new Vue({
//   el: "#app",
//   components: { "custom": MyComponent },
//   template: "<custom />",
//   router
// });

//import config from "../src/components/L1TemplatesAndData/L1main";
//import config from "../src/components/L4ProjectsTools/L4main";
//import config from "../src/components/L6_DI_EventBus/L6main";
//import config from "../src/components/L7_RESTfulWebServices/L7main";
import config from "../src/components/L8_Vuex/L8main";
//import config from "../src/components/L9_Vuex&DynamicComponents/L9main";

config.run();
