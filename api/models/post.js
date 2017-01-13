const mongoose = require('mongoose');
const db = require('./init');

const postSchema = new mongoose.Schema({
  title: String, 
  url: String, 
  body: String,
  votes: Number
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;