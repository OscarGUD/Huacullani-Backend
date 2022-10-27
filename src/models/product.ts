import { Schema, model, models } from 'mongoose'

interface IProduct {
  name: string
  code: number
  buyer: string
  price: number
  quantity: number
  saleDate: string
  typeSale: string
  pdf: object
}

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
    url: String
  }
}, {
  timestamps: true,
  versionKey: false
})

const Product = models.Product || model('Product', productSchema)

export default Product
