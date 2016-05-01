var express = require('express');
var router = express.Router();

var Account = require('../models/account');
var Movie = require('../models/movie');

router.get('/v1/movies', function(req, res) {
  Movie.find({}, function(err, movies) {
    if(err) { res.json(err); }
    else { res.json(movies); }
  });
});

module.exports = router;
