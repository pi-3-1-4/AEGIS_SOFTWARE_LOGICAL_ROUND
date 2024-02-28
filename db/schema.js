const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    "id":Number,
    "title":String,
    "description":String,
    "price":Number,
    "discountPercentage":Number,
    "rating":Number,
    "stock":Number,
    "brand":String,
    "category":String,
    "thumbnail":String,
    "images":Array
})

const Products = mongoose.model('products', productsSchema);

module.exports = Products
