const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");

const methodOverride = require("method-override");
app.use(methodOverride("_method"))


app.set("view engine","ejs");
app.set("views" , path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

const mongo_url ="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(mongo_url)
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
app.get("/listings",async (req,res)=>{
    let allListings = await Listing.find()
    res.render("listings/index.ejs",{allListings});
})
//New Rout

app.get("/listings/new" , (req,res)=>{
    res.render("listings/new.ejs");
})

//show rout

app.get("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
})


//add new listing

app.post("/listings",async(req,res)=>{
    let newlisting = new Listing (req.body.listing);
    await newlisting.save();
    console.log(newlisting);
    res.redirect("/listings")
})

//edit rout

app.get("/listings/:id/edit" , async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
})

//edit in db

app.put("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
   
})

//delete rout

app.delete("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect(`/listings`);
});




//listening
app.listen(8080 ,()=>{
    console.log("app listening at port: 8080")
})