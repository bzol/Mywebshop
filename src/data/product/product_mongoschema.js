var mongoose = require('mongoose');

var Product = new mongoose.Schema({
    productId: Number,
    category: String,
    price: Number,
    name: String,
    image: String
});

const ProductMongoSchema= mongoose.model("products", Product);

module.exports=ProductMongoSchema;