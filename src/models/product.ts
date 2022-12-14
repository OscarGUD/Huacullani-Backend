import { Schema, model, models } from 'mongoose'
import { IProduct } from '../types/types'

const productSchema = new Schema<IProduct>({
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
  buyer: {
    type: String,
    trim: true,
    requiered: true
  },
  price: {
    type: Number,
    trim: true,
    required: true
  },
  quantity: {
    type: Number,
    trim: true,
    required: true
  },
  saleDate: {
    type: String,
    trim: true,
    required: true
  },
  typeSale: {
    type: String,
    trim: true,
    required: true
  },
  pdf: {
    name: String,
    public_id: String,
    url: String
  }
}, {
  timestamps: true,
  versionKey: false
})

const Product = models.Product || model('Product', productSchema)

export default Product
