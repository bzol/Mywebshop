var mongoose = require('mongoose');

var Order = new mongoose.Schema({
    lastname: String,
    firstName: String,
    location:{
    country: String,
    city: String,
    postNumber: String,
    address: String
    },
    phoneNumber: String
});

module.exports=Order;