const expect = require('chai').expect
const sinon = require('sinon')
const TestDemo = require('@/TestDemo.js')

// if tested function is using a result of another function
// we assume that another function returns some value
// when we just want a response/result
describe('TestDemo - stubbing', () => {
  let testDemo
  before(() => {
    testDemo = new TestDemo()
  })
  afterEach(() => {
    // Sinon wrappers must be restored before or after a test case.
    sinon.restore()
  })
  it('stub the add method', () => {
    const stub = sinon.stub(testDemo, 'add')

    stub.withArgs(10, 20).returns(100)

    expect(testDemo.callAnotherFunction(10, 20)).to.be.equal(100)
  })
})
