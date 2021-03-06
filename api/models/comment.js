const mongoose = require('mongoose');
const db = require('./init');

const commentSchema = new mongoose.Schema({
  // post_id: post_id,
  _post: { type: String, ref: 'Post'},
  content: String,
  posted: { type: Date, default: Date.now() }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
