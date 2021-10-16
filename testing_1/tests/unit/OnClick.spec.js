import { mount, config } from '@vue/test-utils'
import OnClick from '@/components/OnClick'

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
    expect(box.text()).toContain('✔')
  })

  it('calls the onHabitDone method - 1', async () => {
    config.showDeprecationWarnings = false

    const wrapper = mount(OnClick, {
      propsData: {
        name: 'Learn something new'
      }
    })
    wrapper.setMethods({
      onHabitDone: jest.fn()
    })
    const box = wrapper.find('.habit__box')
    await box.trigger('click')
    expect(wrapper.vm.onHabitDone).toHaveBeenCalled()
  })
})
