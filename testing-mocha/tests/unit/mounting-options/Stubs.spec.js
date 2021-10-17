import { shallowMount, mount } from '@vue/test-utils'
import ParentWithAPICallChild from '@/components/ParentWithAPICallChild.vue'
import ComponentWithAsyncCall from '@/components/ComponentWithAsyncCall.vue'
import { expect } from 'chai'

describe('ParentWithAPICallChild.vue', () => {
  it('renders with shallowMount and does initialize API call', () => {
    const wrapper = mount(ParentWithAPICallChild)

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).to.be.true
  })

  it('renders with mount and does not initialize API call', () => {
    const wrapper = mount(ParentWithAPICallChild, {
      stubs: {
        ComponentWithAsyncCall: true
      }
    })

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).to.be.true
  })

  it('renders with shallowMount and does not initialize API call', () => {
    const wrapper = shallowMount(ParentWithAPICallChild)

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).to.be.true
  })
})

describe('stubbing components', () => {
  it('stubs dynamic components', () => {
    const Foo = {
      name: 'Foo',
      template: '<div>Foo</div>'
    }
    const Bar = {
      name: 'Bar',
      template: '<div>Bar</div>'
    }
    const Faz = {
      name: 'Faz',
      template: '<div>Faz</div>'
    }
    const Blah = {
      name: 'Blah',
      template: '<div>Blah</div>'
    }
    const TestComponent = {
      template: `
      <div>
        <Foo />
        <Bar />
        <Blah />
      </div>
      `,
      components: { Foo, Bar, Faz, Blah }
    }
    const wrapper = mount(TestComponent, {
      stubs: {
        Foo: true,
        Bar: { template: '<div class="stubbed-bar" />' },
        Blah: Faz
      }
    })
    console.log(wrapper.html())
    expect(wrapper.findComponent(Foo).exists()).to.be.true

    expect(wrapper.find('.stubbed-bar').exists()).to.be.true
    expect(wrapper.findComponent(Bar).exists()).to.be.true

    expect(wrapper.findComponent(Blah).exists()).not.to.be.true

    expect(wrapper.findComponent(Faz).exists()).to.be.true
  })
})
