import { shallowMount } from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton.vue'
import { expect } from 'chai'

const msg = 'submit'
const factory = (propsData) => {
  return shallowMount(SubmitButton, {
    propsData: {
      msg,
      ...propsData
    }
  })
}

describe('SubmitButton', () => {
  describe('does not have admin privileges', () => {
    it('renders a message', () => {
      const wrapper = factory()

      expect(wrapper.find('span').text()).to.eq('Not Authorized')
      expect(wrapper.find('button').text()).to.eq('submit')
    })
  })

  describe('has admin privileges', () => {
    it('renders a message', () => {
      const wrapper = factory({ isAdmin: true })

      expect(wrapper.find('span').text()).to.eq('Admin Privileges')
      expect(wrapper.find('button').text()).to.eq('submit')
    })
  })
})
