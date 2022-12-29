const { getProduct, postProduct, updateProduct, deleteProduct } = require('../../controllers/mongo/controllerProductMongo')

const { Router } = require('express')

const validAdmin = require('../../middlewares/validAdmin')

const admin = true

const productsMongoRouter = Router()

productsMongoRouter.get('/:id?', getProduct)
productsMongoRouter.post('/', validAdmin(admin), postProduct)
productsMongoRouter.put('/:id', validAdmin(admin), updateProduct)
productsMongoRouter.delete('/:id', validAdmin(admin), deleteProduct)

module.exports = productsMongoRouter