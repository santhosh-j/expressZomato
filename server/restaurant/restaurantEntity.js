const mong = require('mongoose');

var schema = new mong.Schema({
  resId: String,
  resName: String,
  resLocation: String,
  resCuisine: String,
  comments: String
});

var restaurants = mong.model('restaurants', schema);

module.exports = restaurants;
