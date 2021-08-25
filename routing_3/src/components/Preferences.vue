<!--
This is the component that will display the preferences to the user. 
It presents the values of two state properties from the data store 
using checkboxes and updates those values when the user toggles the controls.
 -->

<template>
  <div>
    <div v-if="displayWarning" class="text-center m-2">
      <h5 class="bg-danger text-white p-2">Are you sure?</h5>
      <button class="btn btn-danger" v-on:click="doNavigation">Yes</button>
      <button class="btn btn-danger" v-on:click="cancelNavigation">
        Cancel
      </button>
    </div>

    <h4 class="bg-info text-white text-center p-2">Preferences</h4>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        v-bind:checked="primaryEdit"
        v-on:input="setPrimaryEdit"
      />
      <label class="form-check-label">Primary Color for Edit Buttons</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        v-bind:checked="dangerDelete"
        v-on:input="setDangerDelete"
      />
      <label class="form-check-label">Danger Color for Delete Buttons</label>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data: function() {
    return {
      displayWarning: false,
      navigationApproved: false,
      targetRoute: null,
    };
  },
  computed: {
    ...mapState({
      primaryEdit: (state) => state.prefs.primaryEditButton,
      dangerDelete: (state) => state.prefs.dangerDeleteButton,
    }),
  },
  methods: {
    setPrimaryEdit() {
      this.$store.commit("prefs/setEditButtonColor", !this.primaryEdit);
    },
    setDangerDelete() {
      this.$store.commit("prefs/setDeleteButtonColor", !this.dangerDelete);
    },
    doNavigation() {
      this.navigationApproved = true;
      this.$router.push(this.targetRoute.path);
    },
    cancelNavigation() {
      this.navigationApproved = false;
      this.displayWarning = false;
    },
  },
  // I have implemented the beforeRouterLeave method to ask
  // the user to confirm navigation when the route is about to change
  beforeRouteLeave(to, from, next) {
    console.log(1);
    if (this.navigationApproved) {
      console.log(2);
      next();
    } else {
      console.log(3);
      this.targetRoute = to;
      this.displayWarning = true;
      next(false);
    }
  },
};
</script>
