<template>
  <div class="form-group">
    <label>{{ formattedLabel }}</label>
    <!-- Consuming a Service via Dependency Injection -->
    <input v-model.number="value" class="form-control" v-bind:class="[colors.bg, colors.text]" />
  </div>
</template>
<script>
export default {
  props: ["label", "editorFor"],
  data: function () {
    return {
      value: "",
      formattedLabel: this.format(this.label),
    };
  },
  // When a component wants to consume a service provided by its antecedents,
  // it uses the inject property
  inject: {
    colors: "colors",
    // two useful advanced features
    // 1) ability to change the name by which the service will be known
    // - here the service will be known as "format"
    format: {
      // look for a service called labelFormatter
      from: "labelFormatter",
      // 2) providing a default value
      // A factory function is required when you provide default values
      default: () => (value) => `Default ${value}`,
    },
    editingEventBus: "editingEventBus",
  },
  watch: {
    value(newValue) {
      this.editingEventBus.$emit("change", {
        name: this.editorFor,
        value: this.value,
      });
    },
  },
  created() {
    this.editingEventBus.$on("target", (p) => (this.value = p[this.editorFor]));
  },
};
</script>