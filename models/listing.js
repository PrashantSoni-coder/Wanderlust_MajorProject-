const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title : {
        type:String,
        require:true
    },
    description : String,
    image : {
        type:String,
        default:"https://unsplash.com/photos/a-sandy-beach-with-waves-coming-in-to-shore-bMBLl7Cq14A",
        set : (v)=>
            v === "" ? "https://unsplash.com/photos/a-sandy-beach-with-waves-coming-in-to-shore-bMBLl7Cq14A" : v
        ,
        
    },
    price : Number,
    location : String,
    country : String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports=Listing;