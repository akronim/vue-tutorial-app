const chai = require('chai')
const expect = chai.expect
const TestDemo = require('@/TestDemo.js')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

describe('TestDemo - promises', () => {
  let testDemo
  before(() => {
    testDemo = new TestDemo()
  })
  it('promise test case 1', function (done) {
    this.timeout(0) // 0 => wait until a promise is resolved/rejected
    testDemo.testPromise().then((result) => {
      console.log(result)
      expect(result).to.eq(6)
      done()
    })
  })
  it('promise test case 2', function (done) {
    this.timeout(0) // 0 => wait until a promise is resolved/rejected
    testDemo.testPromise2().then((result) => {
      console.log(result)
      expect(result).to.eq(6)
      done()
    })
  })
})

describe('TestDemo - promises - with chai-as-promised', function () {
  let testDemo
  before(() => {
    testDemo = new TestDemo()
  })
  it('promise test case 1', function () {
    this.timeout(0) // 0 => wait until a promise is resolved/rejected
    return expect(testDemo.testPromise()).to.eventually.eq(6)
  })
  it('promise test case 2', function () {
    this.timeout(0) // 0 => wait until a promise is resolved/rejected
    return expect(testDemo.testPromise2()).to.eventually.eq(6)
  })
})
