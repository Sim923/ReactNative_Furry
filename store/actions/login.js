import api from '../../api'

export default function login ({ email, password }) {
  return {
    types: ['LOGIN_REQUEST', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'],
    callAPI: () => api.login({
      email,
      password
    })
  }
}
