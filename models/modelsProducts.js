const mongoose = require('mongoose')

const productsCollection = 'products'

const productsSchema = new mongoose.Schema({
    timestamp: String,
    name: String,
    description: String,
    code: String,
    price: Number,
    thumbnail: String,
    stock: Number
})

const modelsProducts = mongoose.model(productsCollection, productsSchema)

module.exports = modelsProducts