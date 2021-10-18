const request = require('request')
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// module.exports = {
//   getAlbumById: async function (id) {
//     const requestUrl = `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=3`
//     return new Promise((resolve, reject) => {
//       request.get(requestUrl, (err, res, body) => {
//         if (err) {
//           return reject(err)
//         }
//         resolve(JSON.parse(body))
//       })
//     })
//   }
// }

class TestDemo {
  constructor () {
    console.log('initiate')
  }

  sayHello (str) {
    console.log(str)
    return str
  }

  add (arg1, arg2) {
    return arg1 + arg2
  }

  callAnotherFunction (arg1, arg2) {
    this.sayHello('Hello world')

    return this.add(arg1, arg2)
  }

  callTheCallback (callback) {
    callback()
  }

  testPromise () {
    return new Promise(function (resolve, reject) {
      setTimeout(() => resolve(3), 3000)
    }).then(function (result) {
      return result * 2
    })
  }

  async testPromise2 () {
    const result = await new Promise(function (resolve, reject) {
      setTimeout(() => resolve(3), 3000)
    })
    return result * 2
  }

  xhrFn () {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest()
      xhr.open('post', 'https://echo-service-new.herokuapp.com/echo', true)

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            reject(xhr.status)
          }
        }
      }
      xhr.send()
    })
      .then(function (result) {
        return result
      })
      .catch(error => {
        return error
      })
  }

  getAlbumById = async function (id) {
    const requestUrl = `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=2`
    return new Promise((resolve, reject) => {
      request.get(requestUrl, (err, res, body) => {
        if (err) {
          return reject(err)
        }
        resolve(JSON.parse(body))
      })
    })
  }
}

module.exports = TestDemo
