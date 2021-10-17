import Vuex from 'vuex'
import { createLocalVue, mount } from '@vue/test-utils'
import ComponentWithButtons from '@/components/ComponentWithButtons.vue'
import { expect } from 'chai'
import sinon from 'sinon'

const localVue = createLocalVue()
localVue.use(Vuex)

const mutations = {
  testMutation: sinon.spy()
}

const store = new Vuex.Store({
  mutations
})

describe('ComponentWithButtons', () => {
  it('commits a mutation when a button is clicked', async () => {
    const wrapper = mount(ComponentWithButtons, {
      store,
      localVue
    })

    wrapper.find('.commit').trigger('click')
    await wrapper.vm.$nextTick()

    expect(mutations.testMutation).to.have.been.calledWith(
      {},
      { msg: 'Test Commit' }
    )

    expect(mutations.testMutation).to.have.been.called
  })

  it('dispatch a namespaced action when button is clicked', async () => {
    const store = new Vuex.Store()
    store.dispatch = sinon.spy()

    const wrapper = mount(ComponentWithButtons, {
      store,
      localVue
    })

    wrapper.find('.namespaced-dispatch').trigger('click')
    await wrapper.vm.$nextTick()

    expect(store.dispatch).to.have.been.calledWith(
      'namespaced/very/deeply/testAction',
      { msg: 'Test Namespaced Dispatch' }
    )
  })

  it('dispatches an action when a button is clicked', async () => {
    const mockStore = { dispatch: sinon.spy() }
    const wrapper = mount(ComponentWithButtons, {
      mocks: {
        $store: mockStore
      }
    })

    wrapper.find('.dispatch').trigger('click')
    await wrapper.vm.$nextTick()

    expect(mockStore.dispatch).to.have.been.calledWith('testAction', {
      msg: 'Test Dispatch'
    })

    expect(mockStore.dispatch).to.have.been.called
  })
})
