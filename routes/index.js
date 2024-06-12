var express = require('express');
var router = express.Router();

const usermodel = require("./users");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/create",async function(req,res){
  const createduser = await usermodel.create({
    username : "vinay",
    age:21,
    naam:"vinay"
  });
  res.send(createduser);
})
router.get("/checkban",function(req,res){
  console.log(req.session);
  res.send("check kiya hai console dekh");
  });
router.get("/delete",async function(req,res){
  let deleteduser = await usermodel.findOneAndDelete({
    username : "vinay"
  });
res.send(deleteduser);
})

router.get("/allusers",async function(req,res){
  let allusers = await usermodel.findOne({username:"vinay"});

    res.send(allusers);
});
// 1.12 

router.get("/allusers",async function(req,res){
  let all = await usermodel.find()

    res.send(all);
});

module.exports = router;
