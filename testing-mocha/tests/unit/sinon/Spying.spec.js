import Spying from '@/components/Spying.vue'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import { expect } from 'chai'

describe('Spying.vue', () => {
  it('Click on yes button calls our method with argument "yes"', async () => {
    const spy = sinon.spy()

    const wrapper = mount(Spying, {
      propsData: {
        callMe: spy
      }
    })

    await wrapper.find('button.yes').trigger('click')

    expect(spy.callCount).to.eq(1)
    expect(spy.calledOnce).to.be.true
    expect(spy.calledOnceWith('yes')).to.be.true
  })
})
