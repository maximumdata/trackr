var express = require('express');
var router = express.Router();
var passport = require('passport');

var Account = require('../models/account');
var Movie = require('../models/movie');


router.get('/add', function(req, res) {
  if(!req.isAuthenticated()) { res.redirect('/login'); }
  else {

    Account.findOne({ _id: req.user._id}, function(err, account) {
      if(err) { return res.json(err); }
      else {
        var newMovie = new Movie({
          _owner: req.user._id,
          userInfo: {},
          imdbInfo: {
            title: "butt"
          }
        });

        newMovie.save(function(err, newMov) {
          if(err) { return res.json(err); }
          else {
            account.movies.push(newMov);
            account.save(function(err) {
              if(err) { return res.json(err); }
              else {
                res.json(account);
              }
            });
          }
        });
      }
    });
  }
});

router.get('/removeall', function(req, res) {
  Movie.find({ }).remove(function(err) {
    if(err) { res.send(err); }
    else { res.send('removed all movies'); }
  });
});

module.exports = router;
