/*
Setting up event listeners in Vue is pretty straightforward. 
On the element from which you want to listen to events, add an attribute of v-on:eventName="handleEvent", 
where eventName is the name of the event you are interested in and handleEvent is how you want to handle the event.
*/

var app = new Vue({
    el: '#app',
    data: {
        show: true
    },
    template: `
    <div>
        <h1 v-on:click="show = !show">
            Toggle
        </h1>
        <p v-show="show">
            Hide and show this message by clicking the word "Toggle"
        </p>
    </div>
    `
});