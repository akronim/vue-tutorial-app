import { mount, shallowMount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'
import Child from '@/components/Child.vue'

describe('Rendering components', () => {
  it('(shallow) mounts a child', () => {
    const shallowWrapper = shallowMount(Child)
    const mountWrapper = mount(Child)

    console.log(shallowWrapper.html())
    console.log(mountWrapper.html())
  })

  it('(shallow) mounts a parent', () => {
    const shallowWrapper = shallowMount(Parent, {
      data () {
        return { showChild: true }
      }
    })

    const mountWrapper = mount(Parent, {
      data () {
        return { showChild: true }
      }
    })

    console.log(shallowWrapper.html())
    console.log(mountWrapper.html())
  })
})
