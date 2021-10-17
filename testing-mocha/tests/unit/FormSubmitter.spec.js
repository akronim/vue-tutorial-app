import flushPromises from 'flush-promises'
import { mount } from '@vue/test-utils'
import FormSubmitter from '@/components/FormSubmitter.vue'
import { expect } from 'chai'

// mock this.$http
let url = ''
let data = ''

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve) => {
      url = _url
      data = _data
      resolve() //  simulate a successful API response
    })
  }
}

describe('FormSubmitter', () => {
  it('reveals a notification when submitted', async () => {
    const wrapper = mount(FormSubmitter)

    wrapper.find('[data-username]').setValue('alice')
    wrapper.find('form').trigger('submit.prevent')

    // you need to call nextTick to ensure Vue's reactivity system updates the DOM
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.message').text()).to.eq(
      'Thank you for your submission, alice.'
    )
  })

  it('reveals a notification when submitted', async () => {
    const wrapper = mount(FormSubmitter, {
      data () {
        return {
          asyncTest: true
        }
      },
      mocks: {
        $http: mockHttp
      }
    })

    await wrapper.find('[data-username]').setValue('alice')
    await wrapper.find('form').trigger('submit.prevent')

    await flushPromises()

    expect(wrapper.find('.message').text()).to.eq(
      'Thank you for your submission, alice.'
    )
    expect(url).to.eq('/api/v1/register')
    expect(data).to.deep.eq({ username: 'alice' })
  })
})
