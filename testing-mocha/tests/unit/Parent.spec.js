import { mount } from '@vue/test-utils'
import chai, { expect } from 'chai'
import chaiDom from 'chai-dom'
import Parent from '@/components/Parent.vue'
import ParentWithManyChildren from '@/components/ParentWithManyChildren.vue'
import Child from '@/components/Child.vue'

chai.use(chaiDom)

describe('Parent', () => {
  it('does not render a span', () => {
    const wrapper = mount(Parent)

    expect(wrapper.find('span').element).not.to.be.displayed
  })

  it('does render a span', () => {
    const wrapper = mount(Parent, {
      data () {
        return { showSpan: true }
      }
    })

    const element = wrapper.find('span').element

    expect(element).to.be.displayed
  })

  it('does not render a Child component', () => {
    const wrapper = mount(Parent)

    expect(wrapper.findComponent(Child).exists()).to.be.false
  })

  it('renders a Child component', () => {
    const wrapper = mount(Parent, {
      data () {
        return { showChild: true }
      }
    })

    expect(wrapper.findComponent({ name: 'Child' }).exists()).to.be.true
  })
})

describe('ParentWithManyChildren', () => {
  it('renders many children', () => {
    const wrapper = mount(ParentWithManyChildren)

    expect(wrapper.findAllComponents(Child).length).to.eq(3)
  })
})
