var mongoose = require('mongoose');

// Tell mongoose that it should use the built-in promise libriary
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
});

module.exports = {mongoose};
