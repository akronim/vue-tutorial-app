import { mount } from '@vue/test-utils'

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
    expect(wrapper.text()).toContain('updated')

    await btnWrapper.trigger('click')
    expect(wrapper.text()).toContain('some different text')
  })

  // Or if you're without async/await
  it('render text', (done) => {
    const wrapper = mount(Component)
    const btnWrapper = wrapper.find('.btn')

    btnWrapper.trigger('click').then(() => {
      expect(wrapper.text()).toContain('updated')
      btnWrapper.trigger('click').then(() => {
        expect(wrapper.text()).toContain('some different text')
        done()
      })
    })
  })
})
