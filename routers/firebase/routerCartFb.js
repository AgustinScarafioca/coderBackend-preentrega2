const {postCart, getCart, postProductCart, deleteProductCart, deleteCart} = require('../../controllers/firebase/controllerCart')

const { Router } = require('express')

const logReqInfo = require('../../middlewares/logRequestInfo')

const cartFirebaseRouter = Router()

cartFirebaseRouter.use(logReqInfo)

cartFirebaseRouter.post('/', logReqInfo, postCart)
cartFirebaseRouter.get('/:id?', logReqInfo, getCart)
cartFirebaseRouter.delete('/:id', logReqInfo, deleteCart)
cartFirebaseRouter.post('/:id', logReqInfo, postProductCart)
cartFirebaseRouter.deleteProductCart('/:id/:id_prod', logReqInfo, deleteProductCart)

module.exports = cartFirebaseRouter