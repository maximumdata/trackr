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

module.exports = router;
