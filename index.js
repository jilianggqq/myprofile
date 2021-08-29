// import express from 'express'
// using as Reactjs 2015 modules
const express = require("express");

// generate a new application running as apps
const app = express();
const path = require("path");
const router = express.Router();

// app.use(express.static(__dirname + "/public"));
app.use('/css', express.static('public/css'))
app.use('/assets', express.static('public/assets'))
app.use('/js', express.static('public/js'))

// route finalhandler
app.get("/hello", (req, res) => {
  res.send({
    Hello: "world"
  });
});

console.log(__dirname);

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/pages/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/index',function(req,res){
  res.sendFile(path.join(__dirname+'/pages/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/ob',function(req,res){
  res.sendFile(path.join(__dirname+'/pages/ob.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/vsp',function(req,res){
  res.sendFile(path.join(__dirname+'/pages/vsp.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/ma',function(req,res){
  res.sendFile(path.join(__dirname+'/pages/ma.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/me',function(req,res){
  res.sendFile(path.join(__dirname+'/pages/me.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/mis',function(req,res){
  res.sendFile(path.join(__dirname+'/pages/mis.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/sm',function(req,res){
  res.sendFile(path.join(__dirname+'/pages/sm.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/mf',function(req,res){
  res.sendFile(path.join(__dirname+'/pages/mf.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use("/", router);

// the running time underlying environment where node js runs on top of.
// if the app is running in local, process.env.PORT === undefined.
const PORT = process.env.PORT || 5000;

app.listen(PORT);

console.log("app is running in poat " + PORT);
