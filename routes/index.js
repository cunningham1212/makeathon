var express = require("express");
var router  = express.Router();
var passport = require("passport");
var Brother = require("../models/brother");

//root route
router.get("/", function(req, res){
    res.render("landing");
});

router.get("/info", function(req, res){
    res.render("info");
});

router.get("/coming-soon", function(req, res){
    res.render("soon");
});

// show register form
router.get("/register", function(req, res){
   res.render("register"); 
});

//handle sign up logic
router.post("/register", function(req, res){
    var newBrother = new Brother({username: req.body.username, fname: req.body.fname, lname: req.body.lname, nickname: req.body.nickname, email: req.body.email, isExec: false, isAlumni: false, isPledge: false, active: 1});
    Brother.register(newBrother, req.body.password, function(err, brother){
        if(err){
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
           req.flash("success", "Welcome to YelpCamp " + brother.username);
           res.redirect("/campgrounds"); 
        });
    });
});

//show login form
router.get("/login", function(req, res){
   res.render("login"); 
});

//handling login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){
});

// logout route
router.get("/logout", function(req, res){
   req.logout();
   req.flash("success", "Logged you out!");
   res.redirect("/campgrounds");
});



module.exports = router;