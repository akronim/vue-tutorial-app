// data store part specific to the cart

export default {
    // will be accessed with a prefix
    namespaced: true,
    state: {
        lines: []
    },
    getters: {
        itemCount: state => state.lines.reduce((total, line) =>
            total + line.quantity, 0),
        totalPrice: state => state.lines.reduce((total, line) =>
            total + (line.quantity * line.product.price), 0),

    },
    mutations: {
        addProduct(state, product) {
            let line = state.lines.find(line => line.product.id == product.id);
            if (line != null) {
                line.quantity++;
            } else {
                state.lines.push({ product: product, quantity: 1 });
            }
        },
        changeQuantity(state, update) {
            update.line.quantity = update.quantity;
        },
        removeProduct(state, lineToRemove) {
            let index = state.lines.findIndex(line => line == lineToRemove);
            if (index > -1) {
                state.lines.splice(index, 1);
            }
        },
        // mutation that sets the "lines" property
        setCartData(state, data) {
            state.lines = data;
        }
    },
    // persistent data using the local storage API
    // actions are not allowed to modify state data directly
    actions: {
        loadCartData(context) {
            let data = localStorage.getItem("cart");
            if (data != null) {
                context.commit("setCartData", JSON.parse(data));
            }
        },
        storeCartData(context) {
            localStorage.setItem("cart", JSON.stringify(context.state.lines));
        },
        clearCartData(context) {
            context.commit("setCartData", []);
        },
        // called by App.vue
        initializeCart(context, store) {
            // dispatch : this way actions are programmatically invoked
            context.dispatch("loadCartData");
            // to observe the data store for changes to the "lines" state property
            store.watch(state => state.cart.lines,
                // function to invoke when a change is detected
                () => context.dispatch("storeCartData"), 
                // this tells Vuex that I want to receive notifications when there
                // is a change to ANY of the properties in the "lines" array
                { deep: true });
        }
    }
}