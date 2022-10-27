import express from 'express'
import {
  oneWareHouse,
  allWareHouse,
  createWareHouse,
  updateWareHouse,
  deleteWareHouse
} from '../controllers/controllerWereHouse'

const router = express.Router()

router.get('/oneWareHouse/:_id', oneWareHouse)
router.get('/allWareHouse', allWareHouse)
router.post('/createWareHouse', createWareHouse)
router.put('/updateWareHouse/:_id', updateWareHouse )
router.delete('/deleteWareHouse/:_id', deleteWareHouse )

export default router