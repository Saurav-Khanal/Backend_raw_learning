var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: 'Saurav' });
});

router.get('/about',function(req,res,next){
    res.render("about");
})

router.get('/time',function(req,res,next){
  const currentTime=new Date().toLocaleTimeString();
  const date=new Date().toDateString();
  res.render("time",{time:currentTime,date:date});
})

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login',function(req,res,next){
  const username=req.body.username;
  const password=req.body.password;
  res.send(`Welcome ${username} your password is:${password}`);
})

router.get("/signup",function(req,res,next){
  res.render("signup");
})

router.post("/signup",function(req,res){
  const name=req.body.name;
  const email=req.body.email;
  const password=req.body.password;
  res.render("welcome", { name: name, email: email });
})

router.get("/contact",function(req,res){
  res.render("contact");
})

router.post("/contact",function(req,res){
  const name=req.body.name;
  const message=req.body.message;
  const email=req.body.email;
  res.render("thankyou",{name:name,email:email,message:message})
})

module.exports = router;
