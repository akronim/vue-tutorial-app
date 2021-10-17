import { shallowMount, mount } from '@vue/test-utils'
import ParentWithAPICallChild from '@/components/ParentWithAPICallChild.vue'
import ComponentWithAsyncCall from '@/components/ComponentWithAsyncCall.vue'
import { expect } from 'chai'

describe('ParentWithAPICallChild.vue', () => {
  it('renders with shallowMount and does initialize API call', () => {
    const wrapper = mount(ParentWithAPICallChild)

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).to.eq(true)
  })

  it('renders with mount and does not initialize API call', () => {
    const wrapper = mount(ParentWithAPICallChild, {
      stubs: {
        ComponentWithAsyncCall: true
      }
    })

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).to.eq(true)
  })

  it('renders with shallowMount and does not initialize API call', () => {
    const wrapper = shallowMount(ParentWithAPICallChild)

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).to.eq(true)
  })
})
