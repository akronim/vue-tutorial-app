<template>
  <div class="container-fluid">
    <!-- <div class="row">
      <div class="col text-center m-2">
        <router-link to="/list" class="m-1">List</router-link>
        <router-link to="/create" class="m-1">Create</router-link>
      </div>
    </div>-->

    <!-- <div class="row">
      <div class="col text-center m-2">
        <ol>
          <router-link tag="li" to="/list">List</router-link>
          <router-link tag="li" to="/create">Create</router-link>
        </ol>
      </div>
    </div>-->

    <!-- <div class="row">
      <div class="col text-center m-2">
        <ol>
          <router-link tag="li" event="mouseenter" to="/list">List</router-link>
          <router-link tag="li" event="mouseenter" to="/create">Create</router-link>
        </ol>
      </div>
    </div>-->

    <!-- <div class="row">
      <div class="col text-center m-2">
        <ol>
          <router-link tag="li" to="/list">List</router-link>
          <router-link tag="li" to="/create">Create</router-link>
          <router-link tag="li" to="/edit" exact>Edit</router-link>
          <router-link tag="li" to="/edit/1">Edit Kayak</router-link>
        </ol>
      </div>
    </div>-->

    <div class="row">
      <div class="col text-center m-2">
        <div class="btn-group">
          <router-link
            tag="button"
            to="/products/list"
            exact-active-class="btn-info"
            class="btn btn-primary"
          >Products</router-link>
          <router-link
            tag="button"
            to="/preferences"
            exact-active-class="btn-info"
            class="btn btn-primary"
          >Preferences</router-link>
          <router-link
            tag="button"
            to="/products/create"
            exact-active-class="btn-info"
            class="btn btn-primary"
          >Create New</router-link>
          <router-link
            tag="button"
            to="/products/edit/1"
            active-class="btn-info"
            class="btn btn-primary"
          >Edit Kayak</router-link>

          <!-- Using Named Router-View Elements -->
          <router-link
            to="/named/tableleft"
            class="btn btn-primary"
            active-class="btn-info"
          >Table Left</router-link>
          <router-link
            to="/named/tableright"
            class="btn btn-primary"
            active-class="btn-info"
          >Table Right</router-link>

          <router-link
            to="/filter/All"
            class="btn btn-primary"
            active-class="btn-info"
          >Filtered Data</router-link>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col m-2">
        <h3
          class="bg-warning text-white text-center p-2"
          v-if="componentLoading"
        >Loading Component...</h3>
        <!-- The Vue Router uses the router-view element to display content-->
        <!-- v-show hides an element without removing it -->
        <router-view v-show="!componentLoading"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["componentLoading"]),
  },
  created() {
    this.$store.dispatch("getProductsAction");
  },
};
</script>


<style scoped>
/* this won’t match any elements */
router-link {
  text-align: right;
  color: yellow;
  background-color: red;
}

/* this will match the transformed elements and will be applied */
li {
  text-align: left;
  color: blue;
  background-color: lightblue;
}
/* .router-link-active {
  font-size: xx-large;
}
.router-link-exact-active {
  font-weight: bolder;
} */
</style>