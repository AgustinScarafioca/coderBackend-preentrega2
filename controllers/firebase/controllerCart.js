const FirebaseContainer = require('../../container/firebase/firebaseContainer');

const cart = new FirebaseContainer();
const product = new FirebaseContainer();


const postCart = (req, res) => {
    cart.add('carts', {timestamp: Date.now(), products: []})
        .then(id => {
            res.json({id: id});
        })
        .catch(err => {
            res.json(err);
        })
}

const getCart = (req, res) => {
    const idCart = req.params.id;
    
    if (idCart) {
        cart.get('carts', idCart)
        .then(carts => {
            res.json(carts);
        })
        .catch(err => {
            res.json(err);
        })
    }
    else{
        cart.get('carts')
        .then(carts => {
            res.json(carts);
        })
        .catch(err => {
            res.json(err);
        })
    }
    
}

const postProductCart = (req, res) => {
    const idProduct = req.body.id;
    const idCart = req.params.id;

    product.get('products', idProduct)
        .then (producto => {
            let prod = {...producto}
            cart.get('carts', idCart)
                .then (cart => {
                    let carrito = {...cart}
                    carrito.products.push(prod)
                    cart.update('carts', idCart, carrito)
                        .then(id => {
                            res.json({id: id});
                        })
                        .catch(err => {
                            res.json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        })
        .catch(err => {
            res.json(err);
        })

}

const deleteProductCart = (req, res) => {
    const idProduct = req.params.id_prod;
    const idCart = req.params.id;


    cart.get('carts', idCart)
        .then (cart => {
            let carrito = {...cart}
            let producto = carrito.Products.find(doc => doc.id === idProduct);
            const index = carrito.Products.indexOf(producto);
            carrito.Products.splice(index, 1);
            cart.update('carts', idCart, carrito)
                .then(id => {
                    res.json({id: id});
                })
                .catch(err => {
                    res.json(err);
                })
        })
        .catch(err => {
            res.json(err);
        })
    
}

const deleteCart = (req, res) => {
    cart.delete('carts', req.params.id)
        .then(id => {
            res.json({id: id});
        })
        .catch(err => {
            res.json(err);
        })
}


module.exports = {
    postCart,
    getCart,
    postProductCart,
    deleteProductCart,
    deleteCart
}