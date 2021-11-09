import axios from 'axios'

const API_URL = 'http://192.168.43.148:5555/api/v1/auth/'

class AuthService {
  login (user) {
    return axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  }

  logout () {
    localStorage.removeItem('user')
  }

  register (user) {
    return axios.post(API_URL + 'register', {
      // TODO firstName, lastName, phone

      username: user.username,
      email: user.email,
      password: user.password
    })
  }
}

export default new AuthService()
