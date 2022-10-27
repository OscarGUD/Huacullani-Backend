import express from 'express'
import {
  oneProduct,
  allProduct,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/controllerProduct'

const router = express.Router()

router.get('/oneProduct/:_id', oneProduct)
router.get('/allProduct', allProduct)
router.post('/createProduct', createProduct)
router.put('/updateProduct/:_id', updateProduct )
router.delete('/deleteProduct/:_id', deleteProduct )

export default router