import { mount } from '@vue/test-utils'
import NumberRenderer from '@/components/NumberRenderer.vue'
import { expect } from 'chai'

describe('NumberRenderer', () => {
  it('renders even numbers', () => {
    const wrapper = mount(NumberRenderer, {
      propsData: {
        even: true
      }
    })

    expect(wrapper.text()).to.eq('2, 4, 6, 8')
  })

  // The call method is vanilla JavaScript used to call a function
  // and pass to it an argument that will set this for that function.

  // Call can be useful when:
  // - You are testing a component that does some time consuming
  // operations in a lifecycle methods you would like to avoid
  // executing in your computed unit test.
  // - You want to stub out some values on this.
  // Using call and passing a custom context can be useful.
  it('renders odd numbers', () => {
    const localThis = { even: false }

    expect(NumberRenderer.computed.numbers.call(localThis)).to.eq(
      '1, 3, 5, 7, 9'
    )
  })
})
