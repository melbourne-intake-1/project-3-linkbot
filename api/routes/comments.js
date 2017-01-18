const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// post index page of all Posts
router.get('/', function(req, res, next) {
  res.json({ message: 'welcome to the subdirectory' })
  // An empty find method will return all Posts
  // Comment.find()
  //   .then(comments => {
  //     res.json(comments)
  // })
  // .catch(err => {
  //   res.json({ message: err.message })
  // })
});
//
// // Get a single Post
// router.get('/:id', function(req, res, next) {
//   // Use params ID to identify a Post
//   Post.findById(req.params.id)
//     .populate('_comments')
//     .then(post => {
//       res.json(post)
//     })
// });
//
// // Create a post by posting to / route
// router.post('/', function(req, res, next) {
//   // Creates a new post from the attributes passed along in the request (req)
//     post = new Post;
//     post.title = req.body.title;
//     post.url = req.body.url;
//     post.body = req.body.body;
//     post.votes = 0;
//     console.log(post);
//     post.save((err) => {
//     if (err)
//       res.send(err);
//       res.json({post});
//     });
// });
//
// // Update one post
// router.put('/:id', (req, res, next) => {
//   Post.findById(req.params.id)
//     .then(post => {
//       // checking to see if the params are present, and updating if they are.
//       if (req.body.title) post.title = req.body.title;
//       if (req.body.url) post.url = req.body.url;
//       if (req.body.body) post.body = req.body.body;
//       if (req.body.votes) post.votes = post.votes + 1;
//       post.save((err) => {
//         if (err)
//           res.send(err);
//         res.json(post);
//       });
//     });
// });
//
// // Delete a post
// router.delete('/:id', (req, res, next) => {
//   Post.findByIdAndRemove(req.params.id)
//     .then(() => {
//       res.json('Post deleted');
//     });
// });
//
// module.exports = router;
