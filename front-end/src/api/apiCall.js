import axios from 'axios';

function login(email, password){
  return axios.post('http://localhost:3000/auth/signin', {
    email: email,
    password: password,
  })
    .then(function (response) {
      console.log(response)
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

function getPosts() {
  return axios.get('http://localhost:3000/api/posts')
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

function getPost() {
  return axios.get('http://localhost:3000/api/posts')
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

function upvote(postID) {
  return axios.put('http://localhost:3000/api/posts/' + postID, {
    // doesn't need a value - just needs to hit the API with anything for votes and it will increment
    votes: 'any old value'
  })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

function newPost(body, title, url) {
  return axios.post('http://localhost:3000/api/posts', {
    title: title,
    body: body,
    url: url
  })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

function deletePost(post) {
  return axios.delete('http://localhost:3000/api/posts/' + post)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

module.exports = { getPosts, getPost, upvote, newPost, deletePost, login }