const MongoContainer = require('../../container/mongo/mongoContainer')

const Product = new MongoContainer()

const getProduct = (req, res) =>{
    const id = req.params.id

    if(id){
        Product.getProducts(id)
            .then(produc => res.json(produc))
            .catch(err => res.json(err))
    } else {
        Product.getProducts()
            .then(prods => res.json(prods))
            .catch(err => res.json(err))
    }
}

const postProduct = (req, res) => {
    const newProduct = {
        timestamp : Date.now(),
        name : req.body.name,
        description: req.body.description,
        code: req.body.code,
        price: req.body.price,
        thumbnail: req.body.thumbnail,
        stock: req.body.stock
    }

    Product.addProducts(newProduct)
        .then(id => res.json({ id: id }))
        .catch(err => res.json(err)) 
}

const updateProduct = (req, res) =>{
    const product = {
        timestamp : Date.now(),
        name : req.body.name,
        description: req.body.description,
        code: req.body.code,
        price: req.body.price,
        thumbnail: req.body.thumbnail,
        stock: req.body.stock
    }
    Product.updateProduct(req.params,id, product)
        .then(id => res.json({ id:id }))
        .catch(err => res.json(err))
}

const deleteProduct = (req, res) => {
    Product.deleteProduct(req.params.id)
        .then( id => res.json({ id:id }))
        .catch( err => res.json(err))
}

module.exports = {
    getProduct,
    postProduct, 
    updateProduct,
    deleteProduct
}