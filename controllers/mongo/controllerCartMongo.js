const MongoContainer = require('../../container/mongo/mongoContainer')

const Cart = new MongoContainer()
const Product = new MongoContainer()

const postCart = (req, res) =>{
    Cart.addCart({
        timestamp : Date.now,
        products : []
    })
    .then(id => res.json({id:id}))
    .catch(err => res.json(err))
}

const getCart = (req, res) => {
    const id = req.params.id

    if(id) {
        Cart.getCart(id)
        .then(carts => res.json(carts))
        .catch(err => res.json(err))
    } else {
        Cart.getCart()
        .then(carts => res.json(carts))
        .catch(err => res.json(err))
    }
}

const postProductCart = (req, res) =>{
    const idProduct = req.body.id
    const idCart = req.params.id
    
    Product.getProducts(idProduct)
        .then(prod => {
            let product = prod
            Cart.updateCart(idCart, {$push : {products: product}})
            .then(cart => res.json(cart))
            .catch(err => res.json(err))
        })
        .catch(err => res.json(err))
}

const deleteProductCart = (req, res) =>{
    const idProduct = req.params.id_prod
    const idCart = req.params.id

    Product.getProducts(idProduct)
        .then(product=>{
            let prod = product
            Cart.updateCart(idCart, {$pull: {products: prod}})
                .then(cart => res.json(cart))
                .catch(err => res.json(err))
        })
        .catch(err => res.json(err))
}

const deleteCart = (req, res) => {
    Cart.deleteCart(req.params.id)
        .then(id => res.json({id:id}))
        .catch(err => res.json(err))
}

module.exports= {
    postCart,
    getCart,
    postProductCart,
    deleteProductCart,
    deleteCart
}