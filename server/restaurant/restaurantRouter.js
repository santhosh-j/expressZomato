'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const restaurantController = require('./restaurantController');
//const userCtrl = require('./userController');

router.post('/addRestaurant', restaurantController .addRestaurant);
router.patch('/updateRestaurant/:id', restaurantController.updateRestaurant);
router.delete('/deleteRestaurant/:id', restaurantController.deleteRestaurant);
router.get('/view', restaurantController.view);
// Get details of all user in the system
router.get('/', function(req, res) {
  console.log('Inside get');
  res.send('response from user GET route check');
});

module.exports = router;
