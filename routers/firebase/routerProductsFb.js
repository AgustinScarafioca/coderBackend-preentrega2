const {getProduct, postProduct, updateProduct, deleteProduct} = require('../../controllers/firebase/controllerProducts')

const {Router} = require('express')
const validAdmin = require('../../middlewares/validAdmin')

const admin = true

const productFirebaseRouter = Router()

productFirebaseRouter.get('/:id', getProduct)
productFirebaseRouter.post('/', validAdmin(admin), postProduct)
productFirebaseRouter.put('/:id', validAdmin(admin), updateProduct)
productFirebaseRouter.delete('/:id', validAdmin(admin), deleteProduct)

module.exports = productFirebaseRouter