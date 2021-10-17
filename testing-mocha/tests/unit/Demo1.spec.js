import { mount } from '@vue/test-utils'
import Demo1 from '@/components/Demo1.vue'
import { expect } from 'chai'

describe('Demo1', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof Demo1.data).to.eq('function')
  })
})

describe('Mounted Demo1', () => {
  const wrapper = mount(Demo1)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).to.eq(true)
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).to.contain('What is the sum of the two numbers?')
  })

  it('renders correctly with different data', async () => {
    wrapper.setData({ x1: 5, x2: 10 })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).to.contain('10')
  })

  it('button click without correct sum', () => {
    expect(wrapper.vm.message).to.eq('')
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.message).to.eq('TRY AGAIN')
  })

  it('button click with correct sum', () => {
    wrapper.setData({ guess: '15' })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.message).to.eq('SUCCESS!')
  })
})
