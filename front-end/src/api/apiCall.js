import axios from 'axios';

function getPosts() {
  return axios.get('http://localhost:3001/posts')
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

function getPost() {
  return axios.get('http://localhost:3001/posts')
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

function upvote(postID) {
  console.log('In API Call')
  return axios.put('http://localhost:3001/posts/' + postID, {
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
  return axios.post('http://localhost:3001/posts', {
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
  return axios.delete('http://localhost:3001/posts/' + post)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

module.exports = { getPosts, getPost, upvote, newPost, deletePost }