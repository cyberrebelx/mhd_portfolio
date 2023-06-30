let mongoose = require('mongoose');
let inventoryModel = mongoose.Schema(
    {
        item:String,
        qty:Number,
        tags:[],
        status:String,
        size:{
            h:Number,
            w:Number,
            uom:String
        }
    },
    {
        collection:"inventory" //name for the database
    }
);
module.exports = mongoose.model("inventory", inventoryModel) //name in the development environs