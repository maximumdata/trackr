var express = require('express');
var router = express.Router();

var Account = require('../models/account');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Account.find({}, function(err, users) {
    if(err) { res.json(err); }
    else { res.json(users); }
  });
});

router.get('/removeall', function(req, res) {
  Account.find({ }).remove(function(err) {
    if(err) { res.send(err); }
    else { res.send('removed all accounts'); }
  });
});

module.exports = router;
