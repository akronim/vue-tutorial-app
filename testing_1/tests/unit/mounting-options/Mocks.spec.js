import { mount } from '@vue/test-utils'
import Bilingual from '@/components/Bilingual.vue'
import FooRoute from '@/components/FooRoute.vue'
import translations from '@/translations'
import sinon from 'sinon'

// mocks
// Add additional properties to the instance.
// Useful for mocking global injections.

describe('Bilingual', () => {
  it('renders successfully', () => {
    const wrapper = mount(Bilingual, {
      mocks: {
        $t: (msg) => translations.en[msg]
      }
    })

    expect(wrapper.find('.hello').text()).not.toBe('')
    console.log(wrapper.html())
  })

  it('renders successfully', () => {
    const wrapper = mount(Bilingual)

    expect(wrapper.find('.hello').text()).not.toBe('')
    console.log(wrapper.html())
  })
})

describe('FooRoute', () => {
  let wrapper
  let mockRoute
  let mockRouter
  beforeEach(() => {
    mockRoute = {
      path: '/foo',
      name: 'foo',
      hash: '',
      params: { username: 'josh' },
      query: { q: 'hello' }
    }
    mockRouter = {
      push: sinon.spy(),
      currentRoute: { path: mockRoute.path + '/' + mockRoute.params.username }
    }
    wrapper = mount(FooRoute, {
      mocks: {
        // adds mocked route object to the Vue instance
        // before mounting component
        $route: mockRoute,
        $router: mockRouter
      }
    })
  })

  it('renders successfully', () => {
    expect(wrapper.text()).toContain('Foo')

    expect(wrapper.vm.$route.path).toEqual(mockRoute.path)

    expect(wrapper.find('.username').text()).toEqual('josh')

    expect(wrapper.vm.currentRoute).toEqual('foo')

    console.log(wrapper.html())
  })

  it('navigates to the home page', () => {
    wrapper.vm.goToHome()
    sinon.assert.calledWith(mockRouter.push, { name: 'home' })
    // TODO test redirection
  })
})
