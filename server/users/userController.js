'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const user = require('./userEntity');

var userController = {
  addUser : function(req, res) {
      logger.debug("Inside user post");
      let db = new user(req.body);
      db.save().then((doc) => {
        console.log(doc);
        res.send(doc);
      }, (err) => {
        console.log(err);
        res.send(err);
      });
  },
  updateUser : function(req, res) {
      logger.debug("Inside user update");
      let id = req.params.id;
      user.findByIdAndUpdate(id,{$set:{password:req.body.password}},{new:true}).then((doc) => {
        console.log(doc);
        res.send(doc);
      }, (err) => {
        console.log(err);
        res.send(err);
      });
  },
  deleteUser : function(req, res) {
      logger.debug("Inside user update");
      let id = req.params.id;
      user.findOneAndRemove({
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
      user.find().then((doc) => {
        console.log(doc);
        res.send(doc);
      }, (err) => {
        console.log(err);
        res.send(err);
      });
  }
};

module.exports = userController;
