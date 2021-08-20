<template>
  <tr style="background: yellow">
    <td>
      <input
        type="number"
        class="form-control-sm"
        style="width:5em"
        v-bind:value="qvalue"
        v-on:input="sendChangeEvent"
      />
    </td>
    <td>{{ sc_line.product.name }}</td>
    <td class="text-right">{{ sc_line.product.price | currency }}</td>
    <td class="text-right">{{ (sc_line.quantity * sc_line.product.price) | currency }}</td>
    <td class="text-center">
      <button class="btn btn-sm btn-danger" v-on:click="sendRemoveEvent">Remove</button>
    </td>
  </tr>
</template>


<script>
export default {
  // - props feature allows the parent to provide data to its children
  // - its parent will use this prop "sc_line" to provide the line (row) from the
  // shopping cart
  props: ["sc_line"],
  data: function () {
    return {
      qvalue: this.sc_line.quantity,
    };
  },
  methods: {
    // event for communication with its parent
    sendChangeEvent($event) {
      if ($event.target.value > 0) {
        // $emit - to send an event to its parent component
        this.$emit("quantity", Number($event.target.value));
        this.qvalue = $event.target.value;
      } else {
        this.$emit("quantity", 1);
        this.qvalue = 1;
        $event.target.value = this.qvalue;
      }
    },
    sendRemoveEvent() {
      this.$emit("remove", this.sc_line);
    },
  },
};
</script>