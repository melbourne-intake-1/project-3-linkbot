const express = require('express');

const postsRouter = express.Router();
const Post = require('../models/post');

const comments = require('./comments');

const commentsRouter = express.Router({mergeParams: true});
const Comment = require('../models/comment');

const requireAuthorizedUser = require('../middleware/requireAuthorizedUser');
// For routes with /comments after :post_id, use the comments route file
postsRouter.use('/:post_id/comments', comments)

// post index page of all Posts
postsRouter.get('/', function(req, res, next) {
  // An empty find method will return all Posts
  Post.find()
    .populate('_comments')
    .then(posts => {
      res.json(posts)
  })
  .catch(err => {
    res.json({ message: err.message })
  })
});

// Get a single Post
postsRouter.get('/:post_id', function(req, res, next) {
  // Use params ID to identify a Post
  Post.findById(req.params.id)
    .populate('_comments')
    .then(post => {
      res.json(post)
    })
});

// Create a post by posting to / route
postsRouter.post('/', function(req, res, next) {
  // Creates a new post from the attributes passed along in the request (req)
    post = new Post;
    post.title = req.body.title;
    post.url = req.body.url;
    post.body = req.body.body;
    post.votes = 0;
    console.log(post);
    post.save((err) => {
    if (err)
      res.send(err);
      res.json({post});
    });
});

// Update one post
postsRouter.put('/:post_id', (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => {
      // checking to see if the params are present, and updating if they are.
      if (req.body.title) post.title = req.body.title;
      if (req.body.url) post.url = req.body.url;
      if (req.body.body) post.body = req.body.body;
      if (req.body.votes) post.votes = post.votes + 1;
      post.save((err) => {
        if (err)
          res.send(err);
        res.json(post);
      });
    });
});

// Delete a post
postsRouter.delete('/:post_id', (req, res, next) => {
  Post.findByIdAndRemove(req.params.post_id)
    .then(() => {
      res.json('Post deleted');
    });
});

module.exports = postsRouter;
