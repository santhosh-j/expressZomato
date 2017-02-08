// const should = require("chai").should(),
// assert = require ("chai").assert,
// expect = require("chai").expect,
// supertest = require("supertest"),
// app = require("../../bin/www");
//
// var url = supertest("http://localhost:8080");
//
// describe("Testing POST route for restaurant", function(err){
//  it("should handle and send the computed info for adding restaurant", function(done){
//    url
//        .post("/addRestaurant")
//        .send({ "resId": "40", "resName": "15", "resLocation": "Bangalore" })
//        .expect(200)
//        .end(function(err,res){
//          should.not.exist(err);
//          (res.text).should.equal("Added Succesfully","Expected value not matching with response");
//          done();
//        });
//
//  });
// });
// describe("Testing POST route for restaurant", function(err){
//  it("should handle and send the computed info for adding restaurant", function(done){
//    url
//        .post("/updateRestaurant")
//        .send({ "resId": "40", "resName": "15", "resLocation": "Bangalore" })
//        .expect(200)
//        .end(function(err,res){
//          should.not.exist(err);
//          (res.text).should.equal("Update Succesfully","Expected value not matching with response");
//          done();
//        });
//
//  });
// });
// describe("Testing POST route for restaurant", function(err){
//  it("should handle and send the computed info for adding restaurant", function(done){
//    url
//        .post("/deleteRestaurant")
//        .send({ "resId": "40"})
//        .expect(200)
//        .end(function(err,res){
//          should.not.exist(err);
//          (res.text).should.equal("Delete Succesfully","Expected value not matching with response");
//          done();
//        });
//
//  });
// });
