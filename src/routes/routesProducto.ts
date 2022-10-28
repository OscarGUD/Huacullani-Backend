import express from 'express'
import {
  oneProduct,
  allProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/controllerProduct'

const router = express.Router()

router.get('/oneProduct/:_id', oneProduct)
router.get('/allProducts', allProducts)
router.post('/createProduct', createProduct)
router.put('/updateProduct/:_id', updateProduct )
router.delete('/deleteProduct/:_id', deleteProduct )

export default router