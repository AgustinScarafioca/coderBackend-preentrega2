const FirebaseContainer = require('../../container/firebase/firebaseContainer')

const Product = new FirebaseContainer

const getProduct = (req, res) =>{
    if(!req.params.id){
        Product.get('products')
        .then(products => res.json(products))
        .catch(err => res.json(err))
    } else{
        Product.get('products', req.params.id)
        .then(product => res.json(product))
        .catch(err => res.json(err))
    }
}

const postProduct = (req, res) =>{
    const newProduct = {
        timestamp: Date.now(),
        name : req.body.name,
        description : req.body.description,
        code: req.body.code,
        price: req.body.price,
        thumnail: req.body.thumnail,
        stock: req.body.stock
    }
    Product.add('products', newProduct)
    .then(id => res.json({id:id}))
    .catch(err => res.json(err))
}

const updateProduct = (req, res) =>{
    const product = {
        timestamp : Date.now(),
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        codigo : req.body.codigo,
        precio : req.body.precio,
        foto : req.body.foto,
        stock : req.body.stock,
    }

    Product.update('products', req.params.id, product)
    .then(id => res.json({id: id}))
    .catch(err => res.json(err))
}

const deleteProduct = (req, res) =>{
    Product.delete('products', req.params.id)
    .then(id => res.json({id:id}))
    .catch(err => res.json(err))
}

module.exports = {
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct
}