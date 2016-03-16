var mongoose = require('../config/database');

var Movie = mongoose.Schema({
  owner: String,
  title: String,
  rating: Number,
  review: String,
  watchedInfo : {
    where: String,
    when: Date
  }
});

module.exports = mongoose.model('Movie', Movie);
