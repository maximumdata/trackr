var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');
var zxcvbn = require('zxcvbn');

var Account = require('../models/account');


// passport stuff
// registering new user
router.get('/', function(req, res) {
  res.render('register', {});
});

router.post('/', function(req, res) {
  Account.register(new Account({ username: req.body.username }), req.body.password, function(err, account) {
    if(err) {
      return res.status(500).send(err);
    }
    passport.authenticate('local')(req, res, function() {
      res.redirect('/');
    });
  });
});

router.get('/check/user/:username', function(req, res) {
  var username = req.params.username;
  if(validator.isEmail(username)) {
    Account.findOne({username: username}, function(err, user) {
      if(user) {
        res.json({success: false, reason: 'That email address has already been registered'});
      } else {
        res.json({success: true});
      }
    });
  } else {
    res.json({success: false, reason: 'Not a valid email address'});
  }
});

router.get('/check/pass/:password', function(req, res) {
  var password = req.params.password;
  res.json(zxcvbn(password));
});

module.exports = router;
