const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
 
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);
const ExpressError = require("./utils/ExpressError.js");

app.set("view engine","ejs");
app.set("views" , path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));

const listingsRouter = require("./routes/listings.js")
const reviewsRouter = require("./routes/review.js")
const userRouter = require("./routes/user.js");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


const mongo_url ="mongodb://127.0.0.1:27017/wanderlust";

const session = require("express-session");
const flash = require("connect-flash");

main().then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(mongo_url)
}

const sessionOptions = {
    secret: "mySuperSecretPassword",
    resave:false,
    saveUninitialized:true,
    cookie: {
        expires : Date.now() + 7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true
    }
};
app.get("/" , (req,res)=>{
    res.send("root is on");
})


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    console.log(res.locals.success)
    next();
})


app.use("/listings",listingsRouter);

app.use("/listings/:id/reviews",reviewsRouter);

app.use("/",userRouter);


app.all("*path",(req,res,next)=>{
    next(new ExpressError (404,"Page not found"));
});

app.use((err,req,res,next)=>{
    let{statusCode=500,message="something went wrong!"}=err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs",{message})
});




//listening
app.listen(8080 ,()=>{
    console.log("app listening at port: 8080")
})