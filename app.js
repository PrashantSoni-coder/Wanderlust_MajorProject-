const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");

const methodOverride = require("method-override");
app.use(methodOverride("_method"))

const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);

const wrapAsync = require("./utils/wrapAsync.js");

const ExpressError = require("./utils/ExpressError.js");

const {listingSchema} = require("./schema.js");

app.set("view engine","ejs");
app.set("views" , path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));

const mongo_url ="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(mongo_url)
}

const validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    
    if(error){
        throw new ExpressError(400,error);
    }else{
        next();
    }
}



// app.get("/testlisting",(req,res)=>{
//     let samplelisting= new Listing({
//         title:" NOt My New villa",
//         description: "my beach",
//         price: 1200,
//         location:"Calangute, Goa",
//         country:"India",
//     });

//     samplelisting.save().then(()=>{
//         console.log("listing Sucessfull!")
//         res.send ("success");
//     }).catch((err)=>{
//         console.log(err);
//     })
// })

app.get("/" , (req,res)=>{
    res.send("root is on");
})
//index/home page
app.get("/listings",wrapAsync(async (req,res)=>{
    let allListings = await Listing.find()
    res.render("listings/index.ejs",{allListings});
}));
//New Rout

app.get("/listings/new" , (req,res)=>{
    res.render("listings/new.ejs");
})

//show rout

app.get("/listings/:id",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
}))


//add new listing

app.post("/listings",validateListing,wrapAsync(async(req,res,next)=>{

    
    const newlisting = new Listing (req.body.listing);
    
    await newlisting.save();
    console.log(newlisting);
    res.redirect("/listings")
}))

//edit rout

app.get("/listings/:id/edit" , wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}))

//edit in db

app.put("/listings/:id",validateListing,wrapAsync(async(req,res)=>{
    let {id} = req.params;
    let errmsg = error.details.map((el)=>el.message).join(',');
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
   
}))

//delete rout

app.delete("/listings/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect(`/listings`);
}));


app.all("*path",(req,res,next)=>{
    next(new ExpressError (404,"Page not found"));
});

app.use((err,req,res,next)=>{
    let{statusCode=500,message="something went wrong!"}=err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs",{message})
})


//listening
app.listen(8080 ,()=>{
    console.log("app listening at port: 8080")
})