<template>
  <div class="bg-primary text-white text-center h6 p-2 m-2 child">
    <!-- Vue.js provides a feature called slots, which allow a parent component to 
    provide content through which the features provided by the child component 
    will be displayed.-->
    <slot> <!-- unnamed slot --> </slot>

    <slot name="header">
      <h4>Use the form fields to edit the data</h4>
    </slot>

    <table class="table table-dark">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>mary@example.com</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>july@example.com</td>
        </tr>
      </tbody>
    </table>

    <slot name="footer"></slot>
  </div>
</template>


<script>
export default {
  // The Vue DevTools browser extension uses the optional "name" property to show
  // the structure of the application
  name: "Child_3",
};
</script>

<style scoped>
.child {
  border: 5px solid red;
}
</style>
