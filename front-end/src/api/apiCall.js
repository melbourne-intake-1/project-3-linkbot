import axios from 'axios';

// TODO: use axios.create to stop repeating host in url
// (process.env.REACT_APP_API_URL + path, options)

function getPosts() {
  let apiPath = `${process.env.REACT_APP_POSTS_URL}/posts/`
  return axios.get(apiPath)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

function getPost(id) {
  return axios.get(`${process.env.REACT_APP_POSTS_URL}/${id}`)
    .then(function (response) {
      return response
    })
}

function upvote(postID) {
  console.log('In API Call')
  let apiPath = `${process.env.REACT_APP_POSTS_URL}/posts/${postID}`
  console.log('APIPATH', apiPath)
  console.log('http://localhost:3001/posts/' + postID)
  return axios.put(apiPath, {
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
  let apiPath = `${process.env.REACT_APP_POSTS_URL}/posts/`
  return axios.post(apiPath, {
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

function deletePost(postID) {
  let apiPath = `${process.env.REACT_APP_POSTS_URL}/posts/${postID}`
  return axios.delete(apiPath)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

module.exports = { getPosts, getPost, upvote, newPost, deletePost }
