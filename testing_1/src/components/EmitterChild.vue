<template>
  <div>Emitter child</div>
</template>

<script>
export default {
  name: "EmitterChild",
  mounted() {
    console.log("EmitterChild mounted");
    this.$emit("custom");
  },
};
</script>
