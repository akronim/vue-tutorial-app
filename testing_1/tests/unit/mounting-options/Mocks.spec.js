import { mount } from '@vue/test-utils'
import Bilingual from '@/components/Bilingual.vue'
import FooRoute from '@/components/FooRoute.vue'
import translations from '@/translations'

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
  it('renders successfully', () => {
    const $route = {
      path: '/foo',
      hash: '',
      params: { id: '123' },
      query: { q: 'hello' }
    }

    const wrapper = mount(FooRoute, {
      mocks: {
        // adds mocked `$route` object to the Vue instance
        // before mounting component
        $route
      }
    })

    expect(wrapper.text()).toContain('Foo')
    expect(wrapper.vm.$route.path).toBe($route.path)
    console.log(wrapper.html())
  })
})
