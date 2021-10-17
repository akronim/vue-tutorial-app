import { mount, config } from '@vue/test-utils'
import OnClick from '@/components/OnClick'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

describe('OnClick', () => {
  it('marks the habit as completed', async () => {
    const wrapper = mount(OnClick, {
      propsData: {
        name: 'Learn something new'
      }
    })

    // locate and get a wrapper for the element
    const box = wrapper.find('.habit__box')

    // simulate the click:
    // test must be ASYNC and that trigger needs to be AWAITed
    await box.trigger('click')
    expect(box.text()).to.eq('✔')
  })

  it('calls the onHabitDone method - 1', async () => {
    config.showDeprecationWarnings = false

    const wrapper = mount(OnClick, {
      propsData: {
        name: 'Learn something new'
      }
    })

    const mockMethod = sinon.spy()

    wrapper.setMethods({
      onHabitDone: mockMethod
    })
    const box = wrapper.find('.habit__box')
    await box.trigger('click')
    // eslint-disable-next-line no-unused-expressions
    expect(wrapper.vm.onHabitDone).to.have.been.called
    // eslint-disable-next-line no-unused-expressions
    expect(mockMethod).to.have.been.called
  })
})
