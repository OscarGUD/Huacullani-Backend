import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectionDB from './config/connectionDB'

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()
connectionDB()

// * Routes
app.use('/', (_req, res) => {
  res.send('Hello World')
})

// * Port
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`)
})