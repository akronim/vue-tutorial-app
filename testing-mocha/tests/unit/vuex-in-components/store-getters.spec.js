import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import ComponentWithGetters from '@/components/ComponentWithGetters.vue'
import { expect } from 'chai'

// We can use createLocalVue to create a temporary Vue instance,
// and install Vuex
const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    firstName: 'Alice',
    lastName: 'Doe'
  },

  getters: {
    fullname: (state) => state.firstName + ' ' + state.lastName
  }
})

describe('ComponentWithGetters', () => {
  it('renders a full name using a real Vuex getter', () => {
    const wrapper = mount(ComponentWithGetters, { store, localVue })

    expect(wrapper.find('.fullname').text()).to.eq('Alice Doe')
  })

  // use this
  it('renders a full name using the mocks mounting option', () => {
    const wrapper = mount(ComponentWithGetters, {
      mocks: {
        $store: {
          getters: {
            fullname: 'Alice Doe'
          }
        }
      }
    })

    expect(wrapper.find('.fullname').text()).to.eq('Alice Doe')
  })

  it('renders a full name using computed mounting options', () => {
    const wrapper = mount(ComponentWithGetters, {
      computed: {
        fullname: () => 'Alice Doe'
      }
    })

    expect(wrapper.find('.fullname').text()).to.eq('Alice Doe')
  })
})
