var mongoose = require('../config/database');

var Movie = mongoose.Schema({
  _owner: { type: Number, ref: 'Account' },
  title: String,
  rating: Number,
  review: String,
  watchedInfo : {
    where: String,
    when: Date
  }
});

module.exports = mongoose.model('Movie', Movie);
