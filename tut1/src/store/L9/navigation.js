export default {
    namespaced: true,
    state: {
        // "selected" state property will be used as the value of the is attribute
        selected: "table"
    },
    mutations: {
        selectComponent(currentState, selection) {
            currentState.selected = selection;
        }
    }
}