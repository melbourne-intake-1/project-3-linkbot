const express = require('express');

const postsRouter = express.Router();
const Post = require('../models/post');

const commentsRouter = express.Router({mergeParams: true});
const Comment = require('../models/comment');

const requireAuthorizedUser = require('../middleware/requireAuthorizedUser');

postsRouter.use('/:post_id/comments', commentsRouter)

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

// Comment API links 
// Nested under comment. URL looks like posts/post_id/comments/comment_id_
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

module.exports = postsRouter;
