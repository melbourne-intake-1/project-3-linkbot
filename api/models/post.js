const mongoose = require('mongoose');
const db = require('./init');

const postSchema = new mongoose.Schema({
  title: String,
  url: String,
  body: String,
  image: String,
  votes: Number,
  _comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
