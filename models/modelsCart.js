const mongoose = require ('mongoose')

const cartCollection = 'cart'

const cartSchema = new mongoose.Schema({
    timestamp: String,
    products : []
})

const modelsCart = mongoose.model(cartCollection, cartSchema)

module.exports = modelsCart