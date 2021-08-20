<!-- Using Scoped Slots-->
<!-- A scoped slot allows the parent component to provide a template into which 
the child component can insert data, which can be useful when a child component 
performs a transformation using data that it receives from the parent and 
the parent needs to control the formatting.-->
<template>
  <ul>
    <li v-for="prop in Object.keys(product)" v-bind:key="prop">
        <!-- The propname and propvalue attributes allow the parent component to 
        incorporate the values they are assigned into the slot content-->
      <slot v-bind:propname="prop" v-bind:propvalue="product[prop]">{{ prop }}: {{ product[prop] }}</slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["product"],
};
</script>