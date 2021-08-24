<template>
  <div>
    <button v-on:click="changeHeader">{{ headerMutable }}</button>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  name: "Test",
  props: {
    header: {
      type: String,
    },
  },
  data() {
    return {
      headerMutable: this.header,
    };
  },
  methods: {
    changeHeader() {
      const randomString = Math.random()
        .toString(36)
        .substring(2);
      this.headerMutable = randomString;
      bus.$emit("changeIt", randomString);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
