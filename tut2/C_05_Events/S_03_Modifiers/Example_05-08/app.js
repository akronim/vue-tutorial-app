/*
Event modifiers allow us to declaratively change an event’s behavior. 
Declaratively means when we want to modify the behavior of an event, we declare it in the markup. 
We are not assigning the modification from somewhere in the JavaScript. This allows us to see 
the modifications where we register the event handlers in the markup and leave the handler methods 
to be just the parts of code needed to handle the event.

To apply a modifier, we use dot notation on the event name. 
If we were binding to a click event and wanted to add the capture modifier, our v-on would look 
something like v-on:click.capture="methodName".

Some of the event modifiers that Vue provides are:
• stop: Calls event.stopPropagation() and stops further propagation of the current event.
• prevent: Calls event.preventDefault() and tells the user agent to not handle the event with its default handler.
• capture: Adds the event listener in capture mode. Using capture mode for the event will allow our handler to be called before the target of the event will get to handle it.
• self: Calls the handler only if the event starts on the element we register the handler on. This saves us the extra work of checking the event.target to limit our handler to only events that start on the element we register the event with.
• once: Calls the handler only once without us having to remove the handler from the element when we handle the event.
• passive: Sets the event handler option of passive to true, meaning that the handler will not call event.preventDefault() and if it does, the browser should ignore it. Passive event handlers were introduced to help browsers provide a more consistent look with events while scrolling.

*/


var app = new Vue({
    el: '#app',
    data: {
        messages: []
    },
    template: `
    <div>
        <div v-on:click="messages.push('Outer')">
            <h4>Outer : v-on:click="messages.push('Outer')"</h4>

            <div v-on:click.once.capture="messages.push('Middle')">
                <h4>Middle : v-on:click.once.capture="messages.push('Middle')"</h4>

                <div v-on:click.stop="messages.push('Inner One')">
                    <h4>Inner One : v-on:click.stop="messages.push('Inner One')"</h4>        
                </div>

                <div v-on:click="messages.push('Inner B')">
                    <h4>Inner B : v-on:click="messages.push('Inner B')"</h4>        
                </div>
            </div>
        </div>
        <p>
            Last clicked:
            <ol>
                <li v-for="message in messages">
                    {{message}}
                </li>
            </ol>
            </p>
        <input type="button" v-on:click="messages = []" value="Clear" />
    </div>
    `
});