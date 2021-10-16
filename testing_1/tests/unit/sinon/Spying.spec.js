import Spying from '@/components/Spying.vue'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'

describe('Spying.vue', () => {
  it('Click on yes button calls our method with argument "yes"', async () => {
    const spy = sinon.spy()

    const wrapper = mount(Spying, {
      propsData: {
        callMe: spy
      }
    })

    await wrapper.find('button.yes').trigger('click')

    expect(spy.callCount).toBe(1)
    expect(spy.calledOnce).toBeTruthy()
    expect(spy.calledOnceWith('yes')).toBeTruthy()
  })
})
