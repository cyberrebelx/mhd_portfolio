let mongoose = require('mongoose');
let contactModel = mongoose.Schema(
    {
        name:String,
        email:String,
        phone_no : Number
       
    },
    {
        collection:"contact_list" //name for the database
    }
);
module.exports = mongoose.model("contact", contactModel) //name in the development environs