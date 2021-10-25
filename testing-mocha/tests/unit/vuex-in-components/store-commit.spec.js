import Vuex from 'vuex'
import { createLocalVue, mount } from '@vue/test-utils'
import ComponentWithButtons from '@/components/ComponentWithButtons.vue'
import { expect } from 'chai'
import sinon from 'sinon'

// Did the correct mutation get committed?
// Was the payload correct?

// 3 approaches

describe('$store.commit', () => {
  let localVue
  let mutations
  let store
  before(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)

    mutations = {
      testMutation: sinon.spy()
    }

    store = new Vuex.Store({
      mutations
    })
  })
  afterEach(() => {
    sinon.restore()
  })
  it('commits a mutation when a button is clicked - real Vuex store', async () => {
    const wrapper = mount(ComponentWithButtons, {
      store,
      localVue
    })

    wrapper.find('.commit').trigger('click')
    await wrapper.vm.$nextTick()

    // Vuex mutations are always called with two arguments:
    // the first is the current state, and the second is the payload.
    expect(mutations.testMutation).to.have.been.calledWith(
      {},
      { msg: 'Test Commit' }
    )

    expect(mutations.testMutation).to.have.been.called
  })

  // here we actually mock the commit function itself
  it('commits a mutation when a button is clicked - a mock store', async () => {
    const mockStore = { commit: sinon.spy() }
    const wrapper = mount(ComponentWithButtons, {
      mocks: {
        $store: mockStore
      }
    })

    wrapper.find('.commit').trigger('click')
    await wrapper.vm.$nextTick()

    // we assert the correct handler, testMutation, is the first argument,
    // and the second argument, the payload, is correct
    expect(mockStore.commit).to.have.been.calledWith(
      'testMutation',
      { msg: 'Test Commit' }
    )

    expect(mockStore.commit).to.have.been.called
  })

  // this combines a real Vuex store, and a mocked commit method
  it('commits a namespaced mutation when button is clicked', async () => {
    store = new Vuex.Store()
    store.commit = sinon.spy()

    const wrapper = mount(ComponentWithButtons, {
      store,
      localVue
    })

    wrapper.find('.namespaced-commit').trigger('click')
    await wrapper.vm.$nextTick()

    expect(store.commit).to.have.been.calledWith(
      'namespaced/very/deeply/testMutation',
      { msg: 'Test Namespaced Commit' }
    )
  })
})
