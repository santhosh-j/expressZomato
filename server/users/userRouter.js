'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const user = require('./userEntity');
const userController = require('./userController');
//const userCtrl = require('./userController');

router.post('/addUser', userController.addUser);
router.patch('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);
router.get('/view', userController.view);
// Get details of all user in the system
router.get('/', function(req, res) {
  res.send('response from user GET route check');
});

module.exports = router;
