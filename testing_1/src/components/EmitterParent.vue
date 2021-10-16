<template>
  <div>
    <emitter-child @custom="onCustom" />
    <p v-if="emitted">Emitted!</p>
  </div>
</template>

<script>
import EmitterChild from "./EmitterChild";

export default {
  name: "EmitterParent",
  components: { EmitterChild },
  data() {
    return {
      emitted: false,
    };
  },
  methods: {
    onCustom() {
      console.log("EmitterParent onCustom");
      this.emitted = true;
    },
  },
};
</script>
