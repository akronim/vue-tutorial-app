/*
With v-model, we will have two-way data binding from the backing data variable to the UI. 
With two-way data binding if the user makes a change to the data model via a method, we will see the UI display 
the update. If we make a change in the UI, the data model will be updated.
An important thing to understand is that Vue will not use the value or checked or selected 
attributes of the elements. 
The data model created when the Vue instance is initialized is the ultimate source of truth for Vue.
*/

var app = new Vue({
  el: "#app",
  data: {
    inputs: {
      text: "",
      numberAsString: 0,
      numberAsNumber: 0,
      date: "",
      password: "",
      checkbox: false,
      checkboxes: [],
      radios: "",
      radiosPreset: "rollout",
      radiosDynamic: "",
      radiosDynamicOptions: [
        {
          label: "Blue",
          value: "Light",
        },
        {
          label: "Red",
          value: "Dark",
        },
      ],
      file: "",
      select: "",
      multiselect: [],
    },
  },
});
