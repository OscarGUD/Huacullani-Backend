import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import connectionDB from './config/connectionDB'

import routesWareHouse from './routes/routesWareHouse' 
import routesProduct from './routes/routesProducto'

const app = express()
app.use(express.json())
dotenv.config()
connectionDB()

app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : './src/temp'
}));

// * Config CORS
const whitelist = [process.env.FRONTEND_URL]
const options: cors.CorsOptions = {
  origin: function(origin, callback){
    if(whitelist.includes(<string>origin)){
      callback(null, true)
    } else {
      callback(new Error('Error de Cors'))
    }
  },
}
app.use(cors(options))

// * Routes
app.use('/api/wareHouse', routesWareHouse)
app.use('/api/product', routesProduct)

// * Port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`)
})