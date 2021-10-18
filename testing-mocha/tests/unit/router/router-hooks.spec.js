import { routerBeforeEach } from '@/router.js'
import { expect } from 'chai'
import sinon from 'sinon'
const mockModule = require('@/bust-cache.js')

describe('beforeEach', () => {
  let bustCacheSpy
  beforeEach(() => {
    // bustCacheSpy = sinon.stub(mockModule, 'bustCache')
    bustCacheSpy = sinon.spy(mockModule, 'bustCache')
  })
  afterEach(() => {
    sinon.restore()
  })

  it('busts the cache when going to /user', () => {
    const to = {
      matched: [{ meta: { shouldBustCache: true } }]
    }
    const next = sinon.spy()

    routerBeforeEach(to, undefined, next)

    expect(bustCacheSpy).to.have.been.called
    expect(next).to.have.been.called
  })

  it('busts the cache when going to /user 2', () => {
    const to = {
      matched: [{ meta: { shouldBustCache: false } }]
    }
    const next = sinon.spy()

    routerBeforeEach(to, undefined, next)

    expect(bustCacheSpy).not.to.have.been.called
    expect(next).to.have.been.called
  })
})
