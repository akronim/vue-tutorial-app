import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import NestedRoute from '@/components/NestedRoute.vue'
import { expect } from 'chai'
import sinon from 'sinon'
const mockModule = require('@/bust-cache.js')

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('NestedRoute', () => {
  let bustCacheSpy
  before(() => {
    sinon.restore()
    // bustCacheSpy = sinon.stub(mockModule, 'bustCache')
    bustCacheSpy = sinon.spy(mockModule, 'bustCache')
  })
  after(() => {
    sinon.restore()
  })
  it('mocking route - renders a username from route param', () => {
    const username = 'alice'
    const wrapper = shallowMount(NestedRoute, {
      mocks: {
        $route: {
          params: { username }
        }
      }
    })

    expect(wrapper.find('.username').text()).to.eq(username)
  })

  it('calls bustCache and next when leaving the route', () => {
    const next = sinon.spy()
    NestedRoute.beforeRouteLeave(undefined, undefined, next)

    expect(bustCacheSpy).to.have.been.called
    expect(next).to.have.been.called
  })
})
