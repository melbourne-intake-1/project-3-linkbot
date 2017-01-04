var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Welcome to the API index page' });
});

// Get a single link
router.get('/:id', function(req, res, next) {
  res.json({ title: 'Welcome to the API show page' });
});

// Create a link by posting to / route
router.post('/', function(req, res, next) {
  res.json({ title: 'Welcome to the API post page' });
});

// Update one post
router.put('/:id', (req, res, next) => {
  res.json({ title: 'Welcome to the API update page' });
});

// Delete a post 
router.delete('/:id', (req, res, next) => {
  res.json({ title: 'Welcome to the API delete page' });
});

module.exports = router;
