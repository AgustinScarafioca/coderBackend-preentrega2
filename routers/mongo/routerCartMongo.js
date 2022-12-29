const {postCart, getCart, postProductCart, deleteProductCart, deleteCart} = require('../../controllers/mongo/controllerCartMongo')

const { Router } = require('express')
const logReqInfo = require('../../middlewares/logRequestInfo')

const cartMongoRouter = Router()

cartMongoRouter.use(logReqInfo)

cartMongoRouter.post('/', logReqInfo, postCart)
cartMongoRouter.get('/:id?', logReqInfo, getCart)
cartMongoRouter.post('/:id', logReqInfo, postCart)
cartMongoRouter.delete('/:id', logReqInfo, deleteCart)
cartMongoRouter.delete('/:id', logReqInfo, deleteProductCart)

module.exports = cartMongoRouter