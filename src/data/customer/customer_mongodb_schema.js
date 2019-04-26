var mongoose = require('mongoose');

var CustomerMongoDBSchema = new mongoose.Schema({
    lastname: String,
    firstName: String,
    location:{
    country: String,
    city: String,
    postNumber: String,
    street: String,
    homeNumber: String,
    floor: String,
    door: String
    },
    phoneNumber: String,
    email: String,
    facebook:String,
    google: String
});

module.exports=CustomerMongoDBSchema;