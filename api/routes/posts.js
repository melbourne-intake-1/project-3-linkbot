var express = require('express');
var router = express.Router();
const Post = require('../models/post')

// post index page of all Posts
router.get('/', function(req, res, next) {
  // An empty find method will return all Posts
  Post.find()
    .then(posts => {
      res.json(posts)
  })
});

// Get a single Post
router.get('/:id', function(req, res, next) {
  // Use params ID to identify a Post
  Post.findById(req.params.id)
    .then(post => {
      res.json(post)
    })
});

// Create a post by posting to / route
router.post('/', function(req, res, next) {
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
router.put('/:id', (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => {
      // checking to see if the params are present, and updating if they are.
      if (req.body.title) post.title = req.body.title;
      if (req.body.url) post.url = req.body.url;
      if (req.body.body) post.body = req.body.body;
      post.save((err) => {
        if (err)
          res.send(err);
        res.json(post);  
      });
    });
});

// Delete a post 
router.delete('/:id', (req, res, next) => {
  Post.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json('Post deleted');
    });
});

module.exports = router;