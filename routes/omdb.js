var express = require('express');
var router = express.Router();
var omdb = require('omdb');

router.get('/search/:title', function(req, res) {
  omdb.search(req.params.title, function(err, movies) {
    if(err) { res.json({success: false, message: err}); }
    if(movies.length < 1) { res.json({success: true, message: "No movies found :("}); }
    else { res.json(movies); }
  });
});

router.get('/search/:title/:year', function(req, res) {
  omdb.search({terms: req.params.title, year: req.params.year} , function(err, movies) {
    if(err) { res.json({success: false, message: err}); }
    if(movies.length < 1) { res.json({success: true, message: "No movies found :("}); }
    else { res.json(movies); }
  });
});

router.get('/get/:id', function(req, res) {
  omdb.get(req.params.id, function(err, result) {
    if(err) { res.json({success: false, message: err}); }
    else { res.json(result); }
  });
});

module.exports = router;
