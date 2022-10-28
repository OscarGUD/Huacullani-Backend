import { Schema, model, models } from 'mongoose'
import { IWareHouse } from '../types/types'

const wareHouseSchema = new Schema<IWareHouse>({
  name: {
    type: String,
    trim: true,
    required: true
  },
  code: {
    type: Number,
    trim: true,
    required: true
  },
  quantity: {
    type: Number,
    trim: true,
    required: true
  },
  pricePerUnit: {
    type: Number,
    trim: true,
    required: true
  },
  arrivalDate: {
    type: String,
    trim: true,
    required: true
  },
  total: {
    type: Number,
    trim: true,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
})

const WareHouse = models.WareHouse || model('WareHouse', wareHouseSchema)

export default WareHouse
