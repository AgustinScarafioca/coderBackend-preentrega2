const mongoose = require('mongoose')
const modelsProducts = require('../../models/modelsProducts')
const modelsCart = require('../../models/modelsCart')

mongoose.connect("mongodb+srv://coderhouse:coderhouse@backendcoder.zhvn6xh.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser : true, 
    useUnifiedTopology : true
}, (err) => {
    if (err){
        console.log(err)
    } else {
        console.log('Conexion establecida')
    }
})

class MongoContainer{

    async addProducts(data){
        const dataAdd = new modelsProducts(data)
        const productAdd = await dataAdd.save()
        return productAdd
    }

    async addCart (data){
        const dataAdd = new modelsCart(data)
        const cartAdd = await dataAdd.save()
        return cartAdd
    }

    async getProducts(id){
        const prodId = id
        if(prodId){
            const prod = await modelsProducts.findById(prodId)
            return prod
        } else {
            const prod = await modelsProducts.find()
            return prod
        }
    }

    async getCart(id){
        const cartId = id
        if(cartId){
            const cart = await modelsCart.find({_id : cartId})
            return cart
        } else {
            const cart = await modelsCart.find()
            return cart
        }
    }

    async updateProduct(id, data){
        const prodUpdate= await modelsProducts.updateOne({ _id: id}, data)
        return prodUpdate
    }

    async updateCart(id, data){
        const prodUpdate = await modelsCart.updateOne({ _id: id}, data)
        return prodUpdate
    }

    async deleteProduct(id){
        const prodDelete = await modelsCart.deleteOne({ _id : id})
        return prodDelete
    }
}

module.exports = MongoContainer