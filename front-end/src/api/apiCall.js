import axios from 'axios';

function apiCall() {
  // return ('shoes')
  return axios.get('http://localhost:3000/api/posts')
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

module.exports = apiCall