import { mount } from '@vue/test-utils'
import BasicInspection from '@/components/BasicInspection.vue'
import { expect } from 'chai'

describe('BasicInspection', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof BasicInspection.data).to.eq('function')
  })
})

describe('Mounted BasicInspection', () => {
  const wrapper = mount(BasicInspection)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).to.be.true
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
