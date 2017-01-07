import axios from 'axios';

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

function upvote(postID, votes) {
  const updatedVotes = votes + 1
  return axios.put('http://localhost:3000/api/posts/' + postID, {
    votes: updatedVotes
  })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

module.exports = { getPosts, getPost, upvote }