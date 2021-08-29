// import express from 'express'
// using as Reactjs 2015 modules
const express = require("express");

// generate a new application running as apps
const app = express();
const path = require("path");
const router = express.Router();

// route finalhandler
app.get("/", (req, res) => {
  res.send({
    Hello: "world"
  });
});

console.log(__dirname);

router.get("/v1/login", function (req, res) {
  res.sendFile(path.join(__dirname + "/pages/index.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/v1/dashboard", function (req, res) {
  res.sendFile(path.join(__dirname + "/pages/dashboard.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/v1/product", function (req, res) {
  res.sendFile(path.join(__dirname + "/pages/product.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/v1/order", function (req, res) {
  res.sendFile(path.join(__dirname + "/pages/order.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/v1/customer", function (req, res) {
  res.sendFile(path.join(__dirname + "/pages/customer.html"));
  //__dirname : It will resolve to your project folder.
});

// router.get("/about", function (req, res) {
//   res.sendFile(path.join(__dirname + "/about.html"));
// });

// router.get("/sitemap", function (req, res) {
//   res.sendFile(path.join(__dirname + "/sitemap.html"));
// });

//add the router
app.use("/", router);

// the running time underlying environment where node js runs on top of.
// if the app is running in local, process.env.PORT === undefined.
const PORT = process.env.PORT || 5000;

app.listen(PORT);

// app.use(express.static(__dirname + "/public"));
app.use('/static', express.static('public'))

console.log("app is running in poat " + PORT);
