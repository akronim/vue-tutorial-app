import { createLocalVue, mount } from '@vue/test-utils'
import App from '@/App.vue'
import VueRouter from 'vue-router'
import NestedRoute from '@/components/NestedRoute.vue'
import routes from '@/routes.js'
import { expect } from 'chai'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('App', () => {
  beforeEach(() => {

  })
  it('renders a child component via routing', async () => {
    const router = new VueRouter({ routes })

    const wrapper = mount(App, {
      localVue,
      router
    })

    router.push('/nested-route')
    await wrapper.vm.$nextTick()

    console.log(wrapper.html())
    expect(wrapper.findComponent(NestedRoute).exists()).to.be.true
  })
})
