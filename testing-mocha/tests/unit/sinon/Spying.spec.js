import Spying from '@/components/Spying.vue'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import { expect } from 'chai'
const TestDemo = require('@/TestDemo.js')

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

describe('TestDemo spying', () => {
  let testDemo
  before(() => {
    testDemo = new TestDemo()
  })
  it('spy the add method', () => {
    const spy = sinon.spy(testDemo, 'add')

    const arg1 = 10
    const arg2 = 20

    testDemo.callAnotherFunction(arg1, arg2)

    sinon.assert.calledOnce(spy)
    expect(spy.calledOnce).to.be.true // doing the same
    expect(spy).to.have.been.calledOnce // doing the same

    expect(spy.calledOnceWith(arg1, arg2)).to.be.true
    expect(spy).to.have.been.calledOnceWith(arg1, arg2) // doing the same
  })

  it('spy the callback method', () => {
    const callback = sinon.spy()

    testDemo.callTheCallback(callback)

    expect(callback.calledOnce).to.be.true
  })
})
