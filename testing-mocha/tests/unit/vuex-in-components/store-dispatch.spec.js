import Vuex from 'vuex'
import { createLocalVue, mount } from '@vue/test-utils'
import ComponentWithButtons from '@/components/ComponentWithButtons.vue'
import { expect } from 'chai'
import sinon from 'sinon'

// the correct action is dispatched
// the payload is correct

// 3 approaches

const localVue = createLocalVue()
localVue.use(Vuex)

const actions = {
  testAction: sinon.spy()
}

const store = new Vuex.Store({
  actions
})

describe('$store.dispatch', () => {
  it('dispatches an action when a button is clicked', async () => {
    const wrapper = mount(ComponentWithButtons, {
      store,
      localVue
    })

    wrapper.find('.dispatch').trigger('click')
    await wrapper.vm.$nextTick()

    // expect(actions.testAction).to.have.been.calledWith(
    //   {},
    //   { msg: 'Test Dispatch' }
    // )

    expect(actions.testAction).to.have.been.called
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

  it('dispatches a namespaced action when button is clicked', async () => {
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
})
