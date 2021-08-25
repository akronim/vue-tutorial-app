import ProductDisplay from "../components/ProductDisplay";
import ProductEditor from "../components/ProductEditor";
import SideBySide from "../components/SideBySide";

export default {
  // Using Named Router-View Elements
  // The "components" property is used when defining routes that target
  // named router-view elements. This property is assigned an object whose
  // properties are the names of the router-view elements and whose values
  // are the component that should be displayed

  path: "/named",
  component: SideBySide,
  children: [
    {
      path: "tableleft",
      components: {
        left: ProductDisplay,
        right: ProductEditor,
      },
    },
    {
      path: "tableright",
      components: {
        left: ProductEditor,
        right: ProductDisplay,
      },

      // Individual routes can implement their own guards
      beforeEnter: (to, from, next) => {
        next("/products/list");
      },
    },
  ],
  beforeEnter: (to, from, next) => {
    if (to.path == "/named/tableleft") {
      next("/preferences");
    } else {
      next();
    }
  },
};
