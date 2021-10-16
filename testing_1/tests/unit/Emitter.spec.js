import Emitter from '@/components/Emitter.vue'
import { mount } from '@vue/test-utils'

describe('Emitter', () => {
  it('emits an event with two arguments', () => {
    const wrapper = mount(Emitter)

    wrapper.vm.emitEvent()

    console.log(wrapper.emitted().myEvent)

    expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password'])
  })

  it('emits an event with two arguments from test', () => {
    const wrapper = mount(Emitter)

    wrapper.vm.$emit('myEvent', 'name', 'password')

    console.log(wrapper.emitted().myEvent)

    // assert event has been emitted
    expect(wrapper.emitted().myEvent).toBeTruthy()

    // assert event count
    expect(wrapper.emitted().myEvent.length).toBe(1)

    // assert event payload
    expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password'])
  })

  it('emits an event without mounting the component', () => {
    const events = {}
    const $emit = (event, ...args) => {
      events[event] = [...args]
    }

    Emitter.methods.emitEvent.call({ $emit })

    expect(events.myEvent).toEqual(['name', 'password'])
  })
})
