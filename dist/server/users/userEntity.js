const mong = require('mongoose');

var schema = new mong.Schema( {
  username: String,
  password: String
});

var Users = mong.model('users', schema);

module.exports = Users;
