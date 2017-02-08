const mong = require('mongoose');

var schema = new mong.Schema({
  userName: String,
  password: String
});

var Users = mong.model('users', schema);

module.exports = Users;
