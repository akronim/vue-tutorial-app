<template>
  <div>
    <editor-field label="ID" editorFor="id" />
    <editor-field label="Name" editorFor="name" />
    <editor-field label="Price" editorFor="price" />

    <div class="text-center">
      <button class="btn btn-primary" v-on:click="save">
        {{ editing ? "Save" : "Create" }}
      </button>
      <button class="btn btn-secondary" v-on:click="cancel">Cancel</button>
    </div>
  </div>
</template>
<script>
import EditorField from "./EditorField";
import Vue from "vue";

export default {
  data: function() {
    return {
      editing: false,
      product: {
        id: 0,
        name: "",
        price: 0,
      },
      // Creating Local Event Bus 1/2
      // - we use it in EditorField.vue
      localBus: new Vue(),
    };
  },
  components: { EditorField },
  methods: {
    startEdit(product) {
      this.editing = true;
      this.product = {
        id: product.id,
        name: product.name,
        price: product.price,
      };
    },
    startCreate() {
      this.editing = false;
      this.product = {
        id: 0,
        name: "",
        price: 0,
      };
    },
    save() {
      // sending an event
      this.eventBus.$emit("complete", this.product);
      this.startCreate();
      console.log(`Edit Complete: ${JSON.stringify(this.product)}`);
    },
    cancel() {
      this.product = {};
      this.editing = false;
    },
  },
  // The inject property is used to declare a dependency on the eventBus service
  inject: ["eventBus"],
  // Creating Local Event Bus 2/2
  // - we use it in EditorField.vue
  provide: function() {
    return {
      editingEventBus: this.localBus,
    };
  },
  //  created method is used to register handler methods for the create and edit events
  created() {
    // Receiving Events from the Event Bus
    this.eventBus.$on("create", this.startCreate);
    this.eventBus.$on("edit", this.startEdit);
    // when a change event is received, the product object is updated
    this.localBus.$on(
      "change",
      (change) => (this.product[change.name] = change.value)
    );
  },
  watch: {
    product(newValue, oldValue) {
      // When the user starts to edit or create a new object, a target event
      // is sent on the local event bus
      this.localBus.$emit("target", newValue);
    },
  },
};
</script>
