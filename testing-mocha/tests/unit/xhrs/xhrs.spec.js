const chai = require('chai')
const expect = chai.expect
const TestDemo = require('@/TestDemo.js')
const nock = require('nock')

describe('XHR test suite', () => {
  let testDemo
  before(() => {
    testDemo = new TestDemo()
  })
  it('mock and stub xhr call with nock', function (done) {
    const expected = { id: 123 }
    const scope = nock('https://echo-service-new.herokuapp.com')
      .post('/echo')
      .reply(200, expected)

    testDemo
      .xhrFn()
      .then(function (result) {
        expect(result).to.be.eql(expected)
        done()
      })
      .catch(error => {
        done(new Error('test case failed: ' + error))
      })
  })
})
