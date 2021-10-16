import { mount } from '@vue/test-utils'
import '@testing-library/jest-dom'
import Parent from '@/components/Parent.vue'
import ParentWithManyChildren from '@/components/ParentWithManyChildren.vue'
import Child from '@/components/Child.vue'

describe('Parent', () => {
  it('does not render a span', () => {
    const wrapper = mount(Parent)

    expect(wrapper.find('span').element).not.toBeVisible()
  })

  // it.only("does render a span", () => {
  //   const wrapper = mount(Parent, {
  //     data() {
  //       return { showSpan: true };
  //     },
  //   });

  //   const element = wrapper.find("span").element;

  //   expect(element).toBeVisible();
  // });

  it('does not render a Child component', () => {
    const wrapper = mount(Parent)

    expect(wrapper.findComponent(Child).exists()).toBe(false)
  })

  it('renders a Child component', () => {
    const wrapper = mount(Parent, {
      data () {
        return { showChild: true }
      }
    })

    expect(wrapper.findComponent({ name: 'Child' }).exists()).toBe(true)
  })
})

describe('ParentWithManyChildren', () => {
  it('renders many children', () => {
    const wrapper = mount(ParentWithManyChildren)

    expect(wrapper.findAllComponents(Child).length).toBe(3)
  })
})
