const Listing = require("../models/listing")

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req,res)=>{
    let {location } = req.query;

    const page = parseInt(req.query.page) || 1;
    if (page < 1) {
        page = 1;
    }
    let limit = 6;
    let skip = (page-1)*limit;

    let allListings;
    let totalListings;

    
    if(location){
        
        allListings = await Listing.find({location : location}).limit(limit).skip(skip);
        totalListings = await Listing.countDocuments({location:location});
    }else{
        allListings = await Listing.find().limit(limit).skip(skip)
        totalListings = await Listing.countDocuments();
        
    }
    //console.log(totalListings);
    const totalPages = Math.ceil(totalListings/limit);
    if (page > totalPages && totalPages > 0) {
        const query = new URLSearchParams(req.query);
        query.set("page", totalPages);

        return res.redirect(`/listings?${query.toString()}`);
    }
    //console.log(totalPages);
    res.render("listings/index.ejs",{allListings,
        currentPage: page,
        totalPages,
        location});
}

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");
} 
module.exports.showListing = async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id).populate({path : "reviews",populate : {path : "author",},}).populate("owner");
    if(!listing){
        req.flash("error","Listing does not exist!");
        res.redirect("/listings");
        return;
    }
    
    res.render("listings/show.ejs",{listing});
}

module.exports.createListing = async(req,res,next)=>{

    let response = await geocodingClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1,
    })
    .send()
    let url = req.file.path;
    let filename =req.file.filename;
    
    const newlisting = new Listing (req.body.listing);
    newlisting.owner = req.user._id;
    newlisting.image={url,filename};
    newlisting.geometry=  response.body.features[0].geometry;
    let savedListing = await newlisting.save();
    console.log(savedListing);
    req.flash("success","New Listing Created!")
    
    res.redirect("/listings")
}

module.exports.renderEditForm = async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id)
    if(!listing){
        req.flash("error","Listing does not exist!");
        res.redirect("/listings");
        return;
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300/w_250")
    res.render("listings/edit.ejs",{listing,originalImageUrl});
}
module.exports.updateListing = async(req,res)=>{
    console.log("inside update Listing")
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    console.log({...req.body.listing})
    if(req.file){
        let url = req.file.path;
        let filename =req.file.filename;
        listing.image = {url,filename};

        await listing.save();
    }
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
   
}


module.exports.destroyListing = async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
    
    res.redirect(`/listings`);
}