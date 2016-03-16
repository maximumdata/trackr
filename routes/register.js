var express = require('express');
var router = express.Router();
var passport = require('passport');

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

router.get('/check/:username', function(req, res) {
  Account.findOne({username: req.params.username}, function(err, user) {
    if(user) {
      res.json({success: false});
    } else {
      res.json({success: true});
    }
  });
});

module.exports = router;
