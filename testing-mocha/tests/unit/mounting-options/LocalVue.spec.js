// localVue: A local copy of Vue created by createLocalVue to use when
// mounting the component. Installing plugins on this copy of Vue prevents
// polluting the original Vue copy.

import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import FooRoute from '@/components/FooRoute.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('FooRoute tests', () => {
  it('renders the FooRoute component', async () => {
    const wrapper = shallowMount(FooRoute, {
      localVue,
      router
    })
    expect(wrapper.text()).to.contain('Foo')
  })
})
