const express = require('express')
const path = require('path')

//MongoDb
const productsMongoRouter = require('./routers/mongo/routerProductsMongo')
const cartMongoRouter = require('./routers/mongo/routerCartMongo')

app.use('/api/mongo/products', productsMongoRouter)
app.use('/api/mongo/cart', cartMongoRouter)

//Firebase
const productsFirebaseRouter = require('./routers/firebase/routerProductsFb')
const cartFirebaseRouter = require('./routers/firebase/routerCartFb')

app.use('/api/firebase/products', productsFirebaseRouter)
app.use('/api/firebase/cart', cartFirebaseRouter)

//Sql

const productsRouter = require('./routers/sqlRouters/RouterProduct')
const cartRouter = require('./routers/sqlRouters/RouterCart')

app.use('/api/productos', productsRouter)
app.use('/api/carrito', cartRouter)


const app = express()

const PORT = process.env.port || 8080



app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use((req,res) => {
    res.status(404).json({
        error : 'Error en conexion',
        descripcion: `ruta '${req.originalUrl}' método '${req.method}' con problemas`,
    })
})


app.listen(PORT, ()=>{
    console.log('Servidor escuchando en ' + PORT)
})
