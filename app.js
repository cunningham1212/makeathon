var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Brother        = require("./models/brother")
 
    
//requiring routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index")
    
// Good practive the have. Use config varaible on Heroku and use the export comand using clound 9
mongoose.connect("mongodb://cypher:f0cklafayette@ds261479.mlab.com:61479/lehighspd");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Brother.authenticate()));
passport.serializeUser(Brother.serializeUser());
passport.deserializeUser(Brother.deserializeUser());

app.use(function(req, res, next){
   //console.log(req.brother + " B");
   //console.log(req.user + " U");
   res.locals.currentBrother = req.user; /* ? */
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);



app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Makeathon Site Has Started");
});

/*
app.listen(3001, 'localhost', function() {
    console.log("Makeathon Site Has Started");
});
*/