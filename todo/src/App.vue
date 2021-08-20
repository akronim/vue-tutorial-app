<template>
  <div id="app">
    <h4 class="bg-primary text-white text-center p-2">
      {{ name }}'s To Do List
    </h4>

    <div class="container-fluid p-4">
      <div class="row" v-if="filteredTasks.length == 0">
        <div class="col text-center">
          <b>Nothing to do. Hurrah!</b>
        </div>
      </div>
      <template v-else>
        <table class="table table-striped table-bordered table-sm">
          <thead>
            <tr>
              <th>Task</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="t in filteredTasks" v-bind:key="t.action">
              <td>{{ t.action }}</td>
              <td>
                <input type="checkbox" v-model="t.done" />
                {{ t.done }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <div class="form-group m-2">
        <label>New Item:</label>
        <input v-model="newItemText" class="form-control" />

        <div class="text-center m-2">
          <button class="btn btn-primary" v-on:click="addNewTodo">Add</button>
        </div>
      </div>

      <div class="row bg-secondary py-2 mt-2 text-white">
        <div class="col text-center">
          <input
            type="checkbox"
            v-model="hideCompleted"
            class="form-check-input"
          />
          <label class="form-check-label font-weight-bold"
            >Hide completed tasks</label
          >
        </div>

        <div class="col text-center">
          <button class="btn btn-sm btn-warning" v-on:click="deleteCompleted">
            Delete Completed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Adam",
      tasks: [],
      // tasks: [
      //   { action: "Buy Flowers", done: false },
      //   { action: "Get Shoes", done: false },
      //   { action: "Collect Tickets", done: true },
      //   { action: "Call Joe", done: false },
      // ],
      hideCompleted: true,
      newItemText: "",
    };
  },
  // used to define properties that operate on the application’s data
  computed: {
    filteredTasks() {
      return this.hideCompleted
        ? this.tasks.filter((t) => !t.done)
        : this.tasks;
    },
  },
  methods: {
    addNewTodo() {
      this.tasks.push({
        action: this.newItemText,
        done: false,
      });
      this.storeData();
      this.newItemText = "";
    },
    storeData() {
      localStorage.setItem("todos", JSON.stringify(this.tasks));
    },
    deleteCompleted() {
      this.tasks = this.tasks.filter((t) => !t.done);
      this.storeData();
    },
  },
  // gets called when Vue.js creates the component - an opportunity to load the data
  created() {
    let data = localStorage.getItem("todos");
    if (data != null) {
      this.tasks = JSON.parse(data);
    } else {
      let initialData = [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: false },
      ];
      localStorage.setItem("todos", JSON.stringify(initialData));
      this.tasks = initialData;
    }
  },
};
</script>
