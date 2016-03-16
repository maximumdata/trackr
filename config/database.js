var mongoose = require('mongoose');

//connection
mongoose.connect('mongodb://localhost/trackr');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('ok!');
});

module.exports = mongoose;
