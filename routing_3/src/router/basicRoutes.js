// This file exports an array of routes that deal with the basic URLs supported 
// by the application.

import ProductDisplay from "../components/ProductDisplay";
import ProductEditor from "../components/ProductEditor";
import Preferences from "../components/Preferences";
import Products from "../components/Products";
import MessageDisplay from "../components/MessageDisplay";

// The FilteredData component is excluded from the main application JavaScript 
// bundle and is placed in its own bundle that is loaded the first time it is 
// required.
const FilteredData = () => import("../components/FilteredData");

import dataStore from "../store";

export default [
    { path: "/preferences", component: Preferences },
    {
        path: "/products", component: Products,
        // - the Product component’s template also contains a router-view 
        // element for which a component must be selected and that is 
        // the purpose of the children property that this route defines
        // - the value of each child route’s path property is combined with 
        // the path of its parent
        children: [
            { name: "table", path: "list", component: ProductDisplay },
            {
                name: "editor", path: ":op(create|edit)/:id(\\d+)?",
                component: ProductEditor
            },
            { path: "", redirect: "list" }
        ]
    },
    // When the set of URLs supported by an existing application changes, 
    // it is important to ensure that you either update the URLs used in 
    // components or create redirections or aliases between 
    // the old and new URLs.
    { path: "/edit/:id", redirect: to => `/products/edit/${to.params.id}` },
    {
        path: "/filter/:category", component: FilteredData,
        beforeEnter: (to, from, next) => {
            dataStore.commit("setComponentLoading", true);
            next();
        }
    },

    //  Creating Routing-Free Components - passing props
    // http://localhost:8080/hello
    { path: "/hello", component: MessageDisplay, props: { message: "Hello, Adam" } },
    // http://localhost:8080/hello/adam
    {
        path: "/hello/:text", component: MessageDisplay,
        props: (route) => ({ message: `Hello, ${route.params.text}` })
    },
    // http://localhost:8080/message/Hello%20Adam
    { path: "/message/:message", component: MessageDisplay, props: true },
]