var mongoose = require('../config/database');
var passportLocalMongoose = require('passport-local-mongoose');

var Account = mongoose.Schema({
  username: String,
  display: String,
  created: Date,
  password: String,
  uuid: String
});

Account.plugin(passportLocalMongoose);

Account.statics.checkUsername = function(username) {
  Account.findOne({username: username}, function(err, user) {
    if(user) {
      return false;
    } else { return true; }
  });
};

module.exports = mongoose.model('Account', Account);
