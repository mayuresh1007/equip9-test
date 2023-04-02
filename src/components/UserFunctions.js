import axios from 'axios'

export const register = newUser => {
  return axios

    .post('http://localhost:5000/users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      mobile_number: newUser.mobile_number,
      email: newUser.email,
      password: newUser.password,
      file: newUser.file
    })
    .then(response => {
      console.log(response)
      if (response.data.status === 'failed') {
        alert(response.data.message)
      }
      console.log('Registered')
    })
    .catch(err => {
      console.log(err)
    })
}

export const login = user => {
  return axios
    .post('http://localhost:5000/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      if (response.data.status === 'failed') {
        alert(response.data.message)
      }
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const update = updateUser => {
  return axios
    .put('http://localhost:5000/users/update', {
      first_name: updateUser.first_name,
      last_name: updateUser.last_name,
      email: updateUser.email,
      mobile_number: updateUser.mobile_number,
      // password: user.password
    })
    .then(response => {
      if (response.data.status === 'failed') {
        alert(response.data.message)
      }
      // localStorage.getItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

