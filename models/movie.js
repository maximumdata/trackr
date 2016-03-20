var mongoose = require('../config/database');

var Movie = mongoose.Schema({
  _owner: { type: String, ref: 'Account' },
  userInfo : {
    rating: Number,
    tags: [String],
    review: {
      public: {type: Boolean, default: false},
      text: String,
      date: Date,
      rating: Number
    },
    watchedInfo : {
      where: String,
      when: Date
    }
  },
  imdbInfo : {
    title: String,
    rated: String,
    released: Date,
    runtime: String,
    genres: [String],
    director: String,
    actors: String,
    plot: String,
    poster: String,
    rating: String,
    id: String
  }
});

module.exports = mongoose.model('Movie', Movie);
