<template>
  <div>
    <editor-field label="ID" editorFor="id" />
    <editor-field label="Name" editorFor="name" />
    <editor-field label="Price" editorFor="price" />

    <div class="text-center">
      <button class="btn btn-primary" v-on:click="save">{{ editing ? "Save" : "Create" }}</button>
      <button class="btn btn-secondary" v-on:click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
import EditorField from "./EditorField";

export default {
  data: function () {
    return {
      editing: false,
      product: {
        id: 0,
        name: "",
        price: 0,
      },
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
      // TODO - process edited or created product
      console.log(`Edit Complete: ${JSON.stringify(this.product)}`);
      this.startCreate();
    },
    cancel() {
      this.product = {};
      this.editing = false;
    },
  },
  //  a component can override one or more services that its antecedents provide
  // provide: function () {
  //   return {
  //     colors: {
  //       bg: "bg-light",
  //       text: "text-danger",
  //     },
  //   };
  // },
};
</script>