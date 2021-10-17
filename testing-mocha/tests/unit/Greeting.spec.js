import { mount } from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'
import { expect } from 'chai'

describe('Greeting.vue', () => {
  it('renders a greeting', () => {
    const wrapper = mount(Greeting)

    expect(wrapper.html().includes('Vue and TDD')).to.eq(true)
    expect(wrapper.text()).to.eq('Vue and TDD')
  })
})
