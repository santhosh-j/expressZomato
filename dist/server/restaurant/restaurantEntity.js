const mong = require('mongoose');

var schema = new mong.Schema({
  name: String,
  address: { type: String, unique: true},
  cuisines: String,
  costForTwo: Number,
  comments: String,
  ratings: Number,
  image: String
});

var restaurants = mong.model('restaurants', schema);

module.exports = restaurants;
