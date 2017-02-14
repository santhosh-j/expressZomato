'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const restaurant = require('./restaurantEntity');

var restaurantController = {
  addRestaurant:  function(req, res) {
      let db = new restaurant(req.body);
      db.save().then((doc) => {
        console.log(doc);
        res.send(doc);
      }, (err) => {
        console.log(err);
        res.send(err);
      });
  },
  updateRestaurant : function(req, res) {
      let id = req.params.id;
      restaurant.findByIdAndUpdate(id,{$set:{comments:req.body.comments}},{new:true}).then((doc) => {
        console.log(doc);
        res.send(doc);
      }, (err) => {
        console.log(err);
        res.send(err);
      });
  },
  deleteRestaurant : function(req, res) {
      logger.debug("Inside user update");
      let id = req.params.id;
      restaurant.findOneAndRemove({
          "_id": id
      }).then((doc) => {
        if(!doc) {
          res.status(404).send();
        }
        console.log(doc);
        res.send(doc);
      }, (err) => {
        console.log(err);
        res.send(err);
      });
  },
  view : function(req, res) {
      logger.debug("Inside user view");
      restaurant.find().then((doc) => {
        console.log(doc);
        res.send(doc);
      }, (err) => {
        console.log(err);
        res.send(err);
      });
  }
};
module.exports = restaurantController;
