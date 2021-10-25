import actions from '@/store/actions.js'
import { expect } from 'chai'
import sinon from 'sinon'
import axios from 'axios'

// action:
// make an asynchronous call to an API
// do some processing on the data (optional)
// commit a mutation with the result as the payload

// test:
// was the correct API endpoint used?
// is the payload correct?
// was the correct mutation committed with the result

let url = ''
let data = {}
let mockError = false

describe('authenticate', () => {
  beforeEach(() => {
    sinon.stub(axios, 'post').callsFake(function (_url, _data, _config) {
      return new Promise((resolve) => {
        if (mockError) throw Error('Mock error')
        url = _url
        data = _data
        resolve(true)
      })
    })
  })
  afterEach(() => {
    sinon.restore()
  })
  it('authenticated a user', async () => {
    const commit = sinon.spy()
    const username = 'alice'
    const password = 'password'

    await actions.authenticate({ commit }, { username, password })

    expect(url).to.eq('/api/authenticate')
    expect(data).to.deep.eq({ username, password })
    expect(commit).to.have.been.calledWith('SET_AUTHENTICATED', true)
  })

  it('catches an error', async () => {
    mockError = true

    try {
      await actions.authenticate({ commit: sinon.spy() }, {})
    } catch (err) {
      console.log(err.message)
      expect(err.message).to.eql('API Error occurred.')
    }
  })
})
