const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {listingSchema} = require("../schema.js");
const {isLoggedIn} = require("../middleware.js");


const validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    
    if(error){
        throw new ExpressError(400,error);
    }else{
        next();
    }
}

//index/home page
router.get("/",wrapAsync(async (req,res)=>{
    let allListings = await Listing.find()
    res.render("listings/index.ejs",{allListings});
}));
//New Rout

router.get("/new" ,isLoggedIn, (req,res)=>{
    res.render("listings/new.ejs");
})

//show rout

router.get("/:id",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("error","Listing does not exist!");
        res.redirect("/listings");
        return;
    }
    res.render("listings/show.ejs",{listing});
}))


//add new listing

router.post("/",validateListing,isLoggedIn,wrapAsync(async(req,res,next)=>{

    
    const newlisting = new Listing (req.body.listing);
    
    await newlisting.save();
    req.flash("success","New Listing Created!")
    
    res.redirect("/listings")
}))

//edit rout

router.get("/:id/edit" ,isLoggedIn, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id)
    if(!listing){
        req.flash("error","Listing does not exist!");
        res.redirect("/listings");
        return;
    }
    res.render("listings/edit.ejs",{listing});
}))

//edit in db

router.put("/:id",isLoggedIn,validateListing,wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
     req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
   
}))

//delete rout

router.delete("/:id",isLoggedIn,wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
    
    res.redirect(`/listings`);
}));

module.exports = router;