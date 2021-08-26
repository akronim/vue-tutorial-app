<template>
  <div class="habit">
    <span class="habit__name">{{ name }}</span>
    <span
      :class="{ 'habit__box--done': done }"
      class="habit__box"
      @click="onHabitDone"
    >
      <span v-if="done">✔</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "OnClick",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    done: false,
  }),
  methods: {
    onHabitDone() {
      this.done = !this.done;
    },
  },
};
</script>

<style scoped>
.habit {
  height: 100vh;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: ui-sans-serif, system-ui;
}
.habit__name {
  font-weight: bold;
  font-size: 64px;
  margin-right: 20px;
}
.habit__box {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #cbd5e0;
  background-color: #ffffff;
  font-size: 40px;
  cursor: pointer;
  border-radius: 10px;
}
.habit__box--done {
  border-color: #22543d;
  background-color: #2f855a;
  color: white;
}
</style>
