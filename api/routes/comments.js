const express = require('express');
const router = express.Router();

const commentsRouter = express.Router({mergeParams: true});
const Comment = require('../models/comment');

const Post = require('../models/post');

// post index page of all Posts
commentsRouter.post('/', function(req, res, next) {
  comment = new Comment({
    content: req.body.content,
    _post: req.params.post_id
  })
  comment.save((err, doc) => {
    if (err)
      res.send(err);
    Post.findByIdAndUpdate(req.params.post_id,
      { $push: { _comments: doc._id } },
      { new: true },
      (err, post) => {
       if (err)
        res.send(err);
        res.json({doc});
      }
    )
  });
});

commentsRouter.get('/:comment_id', function(req, res, next) {
  // Use params ID to identify a Post
  console.log(`COMMENT ${req.params.comment_id} POST ${req.params.post_id}`)
  Comment.findById(req.params.comment_id)
    .then(comment => {
      res.json(comment)
    })
});

commentsRouter.get('/', function(req, res, next) {
  // finds all comments related to preceding post (req.params.id)
  Comment.find({ _post: req.params.post_id })
    .then(comments => {
      res.json(comments)
  })
  .catch(err => {
    res.json({ message: err.message })
  })
});

commentsRouter.put('/:comment_id', (req, res, next) => {
  Comment.findById(req.params.comment_id)
    .then(comment => {
      // checking to see if the params are present, and updating if they are.
      if (req.body.content) comment.content = req.body.content;
      comment.save((err) => {
        if (err)
          res.send(err);
        res.json(comment);
      });
    });
});

// Delete a post
commentsRouter.delete('/:comment_id', (req, res, next) => {
  Comment.findByIdAndRemove(req.params.comment_id)
    .then(() => {
      res.json('Comment deleted');
    });
});

module.exports = commentsRouter;

