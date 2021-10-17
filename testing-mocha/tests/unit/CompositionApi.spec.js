import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import CompositionApi from '@/components/CompositionApi.vue'

describe('CompositionApi', () => {
  it('increments a count when button is clicked', async () => {
    const wrapper = shallowMount(CompositionApi, {
      propsData: { message: '' }
    })

    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.count').text()).to.eq('Count: 1')
  })

  it('renders a message', async () => {
    const wrapper = shallowMount(CompositionApi, {
      propsData: {
        message: 'Testing the composition API'
      }
    })

    expect(wrapper.find('.message').text()).to.eq('TESTING THE COMPOSITION API')
  })
})
