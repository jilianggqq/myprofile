const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname, 'public')))

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/index',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/ob',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/ob.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/vsp',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/vsp.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/ma',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/ma.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/me',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/me.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/mis',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/mis.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/sm',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/sm.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/mf',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/mf.html'));
  //__dirname : It will resolve to your project folder.
});

// router.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });

// router.get('/sitemap',function(req,res){
//   res.sendFile(path.join(__dirname+'/sitemap.html'));
// });

//add the router
app.use('/', router);
app.listen(process.env.port || 5000);

console.log('Running at Port 5000');