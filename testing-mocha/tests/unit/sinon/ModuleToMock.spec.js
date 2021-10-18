const expect = require('chai').expect
const request = require('request')
const sinon = require('sinon')
const moduleToMock = require('@/module-to-mock.js')

describe('with mock: getPhotosByAlbumId', () => {
  it('should getPhotosByAlbumId', (done) => {
    const requestMock = sinon.mock(request)
    const myPhotos = [{
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952'
    },
    {
      albumId: 1,
      id: 2,
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796'
    },
    {
      albumId: 1,
      id: 3,
      title: 'officia porro iure quia iusto qui ipsa ut modi',
      url: 'https://via.placeholder.com/600/24f355',
      thumbnailUrl: 'https://via.placeholder.com/150/24f355'
    }]

    // override the original get() method
    requestMock.expects('get')
      // asserts that our expectation is called once
      .once()
      // asserts that we expect the get() method to be called with the array of arguments we supply to it
      .withArgs('https://jsonplaceholder.typicode.com/albums/2/photos?_limit=3')
      // puts data into the callback that our mock object accepts
      // in this case, our error and response are both null but our body has a JSON response
      .yields(null, null, JSON.stringify(myPhotos))

    moduleToMock.getAlbumById(2).then((photos) => {
      expect(photos.length).to.equal(3)
      photos.forEach((photo) => {
        expect(photo).to.have.property('id')
        expect(photo).to.have.property('title')
        expect(photo).to.have.property('url')
      })

      requestMock.verify()
      requestMock.restore()
      done()
    })
  })
})
