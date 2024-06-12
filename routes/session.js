var express = require("express");
const { route } = require(".");
var router = express.Router();

router.get("/",function(req,res){
    
    // req.session.koibhiname  = "hello";
    req.session.ban  = true;
    res.render("session");
});

router.get("/checkban",function(req,res){
console.log(req.session);
res.send("check kiya hai console dekh");
});

module.exports = router;