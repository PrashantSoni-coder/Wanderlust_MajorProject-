const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");


app.set("view engine","ejs");
app.set("views" , path.join(__dirname,"views"));

const mongo_url ="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(mongo_url)
}



app.get("/testlisting",(req,res)=>{
    let samplelisting= new Listing({
        title:"My New villa",
        description: "my beach",
        price: 1200,
        location:"Calangute, Goa",
        country:"India",
    });

    samplelisting.save().then(()=>{
        console.log("listing Sucessfull!")
        res.send ("success");
    }).catch((err)=>{
        console.log(err);
    })
})

app.get("/" , (req,res)=>{
    res.send("root is on");
})

app.listen(8080 ,()=>{
    console.log("app listening at port: 8080")
})