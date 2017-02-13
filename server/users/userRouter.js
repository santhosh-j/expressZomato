'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const user = require('./userEntity');
const userController = require('./userController');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
//const userCtrl = require('./userController');

router.post('/addUser', userController.addUser);
router.patch('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);
router.get('/view', userController.view);
// Get details of all user in the system
router.get('/', function(req, res) {
  res.send('response from user GET route check');
});
router.post('/login',passport.authenticate('local', {
      failureFlash: 'Invalid Username and Password',
      successFlash: "Welcome to foodie App"
   }),userController.login);

router.get('/logout', userController.logout);
module.exports = router;
