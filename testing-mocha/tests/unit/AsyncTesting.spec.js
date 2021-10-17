import { mount } from '@vue/test-utils'
import { expect } from 'chai'

const Component = {
  template: `
      <div>
        <button class="btn" @click="onBtnClick">Update</button>
        <span>{{ msg }}</span>
      </div>
    `,
  data () {
    return { msg: 'Hello world!' }
  },
  methods: {
    onBtnClick () {
      this.msg = this.msg === 'updated' ? 'some different text' : 'updated'
    }
  }
}

describe('Async testing', () => {
  it('updates text', async () => {
    const wrapper = mount(Component)
    const btnWrapper = wrapper.find('.btn')

    await btnWrapper.trigger('click')
    expect(wrapper.text()).to.contain('updated')

    await btnWrapper.trigger('click')
    expect(wrapper.text()).to.contain('some different text')
  })

  // Or if you're without async/await
  it('render text', (done) => {
    const wrapper = mount(Component)
    const btnWrapper = wrapper.find('.btn')

    btnWrapper.trigger('click').then(() => {
      expect(wrapper.text()).to.contain('updated')
      btnWrapper.trigger('click').then(() => {
        expect(wrapper.text()).to.contain('some different text')
        done()
      })
    })
  })
})
