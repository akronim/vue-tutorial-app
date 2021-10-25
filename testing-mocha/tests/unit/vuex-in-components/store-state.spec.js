import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import ComponentWithVuex from '@/components/ComponentWithVuex.vue'
import { expect } from 'chai'

// We can use createLocalVue to create a temporary Vue instance,
// and install Vuex
const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: 'alice'
  }
})

describe('$store.state', () => {
  it('renders a username using a real Vuex store', () => {
    const wrapper = mount(ComponentWithVuex, { store, localVue })

    expect(wrapper.find('.username').text()).to.eq('alice')
  })

  // You can mock the global $store object.
  // This means you do not need to use createLocalVue, or create
  // a new Vuex store.
  it('renders a username using a mock store', () => {
    const wrapper = mount(ComponentWithVuex, {
      mocks: {
        $store: {
          state: { username: 'alice' }
        }
      }
    })

    expect(wrapper.find('.username').text()).to.eq('alice')
  })
})
