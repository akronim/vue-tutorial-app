// With file inputs, you cannot use v-model.
// To access the selected value, the change event will have to be used with v-on.

var app = new Vue({
  el: "#app",
  data: {
    fileName: "",
  },
  methods: {
    fileChanged: function (event) {
      this.fileName = event.target.files[0].name;
    },
  },
  template: `
  <div>
    <h4>File</h4>
    <!-- <input type="file" v-model="inputs.file" /> -->
    <input type="file" v-on:change="fileChanged($event)" />
    <p>
        <strong>File:</strong> {{fileName}}
    </p>   
  </div>
  `,
});
