const expect = require('chai').expect
const request = require('request')
const sinon = require('sinon')
const TestDemo = require('@/TestDemo.js')

describe('with mock: getPhotosByAlbumId', () => {
  let testDemo
  before(() => {
    testDemo = new TestDemo()
  })

  it('should getPhotosByAlbumId', (done) => {
    const requestMock = sinon.mock(request)
    const myPhotos = [{
      albumId: 1,
      id: 1
    },
    {
      albumId: 1,
      id: 2
    }]

    // override the original get() method
    requestMock.expects('get')
      // asserts that our expectation is called once
      .once()
      // asserts that we expect the get() method to be called with the array of arguments we supply to it
      .withArgs('https://jsonplaceholder.typicode.com/albums/1/photos?_limit=2')
      // puts data into the callback that our mock object accepts
      // in this case, our error and response are both null but our body has a JSON response
      .yields(null, null, JSON.stringify(myPhotos))

    testDemo.getAlbumById(1).then((photos) => {
      expect(photos.length).to.equal(2)
      photos.forEach((photo) => {
        expect(photo).to.have.property('id')
      })

      requestMock.verify()
      requestMock.restore()
      done()
    })
  })
})

// a method should always be mocked if it has no impact on calling method
// instead of real call a dummy call should be used
// by mocking a real function call is ignored
describe('TestDemo - mocking', () => {
  let testDemo
  before(() => {
    testDemo = new TestDemo()
  })
  it('mock the sayHello method', () => {
    const mock = sinon.mock(testDemo)

    const expectation = mock.expects('sayHello')
    expectation.exactly(1)
    expectation.withArgs('Hello world')
    expectation.returns('whatever')

    testDemo.callAnotherFunction(10, 20)

    mock.verify()
    mock.restore()
  })
})
