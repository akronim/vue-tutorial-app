// import { shallowMount, createLocalVue } from '@vue/test-utils'
// import VueRouter from 'vue-router'
// import NestedRoute from '@/components/NestedRoute.vue'
// // import mockModule from '@/bust-cache.js'
// import { expect } from 'chai'
// import sinon from 'sinon'
// const mockModule = require('@/bust-cache.js')

// // jest.mock('@/bust-cache.js', () => ({ bustCache: jest.fn() }))
// const localVue = createLocalVue()
// localVue.use(VueRouter)

// describe('NestedRoute', () => {
//     let bustCacheSpy
//     beforeEach(() => {
//       // bustCacheSpy = sinon.stub(mockModule, 'bustCache')
//       bustCacheSpy = sinon.spy(mockModule, 'bustCache')
//     })
//     afterEach(() => {
//       sinon.restore()
//     })
//   it('renders a username from query string', () => {
//     const username = 'alice'
//     const wrapper = shallowMount(NestedRoute, {
//       mocks: {
//         $route: {
//           params: { username }
//         }
//       }
//     })

//     expect(wrapper.find('.username').text()).to.eq(username)
//   })

//   it('calls bustCache and next when leaving the route', () => {
//     const next = sinon.spy()
//     NestedRoute.beforeRouteLeave(undefined, undefined, next)

//     expect(mockModule.bustCache).to.have.been.called
//     expect(next).to.have.been.called
//   })
// })
