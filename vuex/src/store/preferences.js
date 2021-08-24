// Vuex provides support for modules, which allows a data store to be broken up 
// into self-contained sections that are easier to write, understand, and manage

export default {
    // If you enable the namespace feature, then all the features 
    // must be accessed using a prefix
    namespaced: true,
    state: {
        stripedTable: true,
        primaryEditButton: false,
        dangerDeleteButton: false
    },
    getters: {
        editClass(state) {
            return state.primaryEditButton ? "btn-primary" : "btn-secondary";
        },
        deleteClass(state) {
            return state.dangerDeleteButton ? "btn-danger" : "btn-secondary";
        },
        // If you want to access data store features in the main module,
        // then you can define an additional argument
        tableClass(state, payload, rootState) {
            return rootState.products.length > 0
                && rootState.products[0].price > 500 ? "table-striped" : ""
        }
    },
    mutations: {
        setEditButtonColor(currentState, primary) {
            currentState.primaryEditButton = primary;
        },
        setDeleteButtonColor(currentState, danger) {
            currentState.dangerDeleteButton = danger;
        }
    }
}

// to incorporate a module in the data store (main module - index.js), use 
// the import statement and configure the data store using the modules property