import { Request, Response } from "express"
import fileUpload from "express-fileupload"
import Product from "../models/product"
import cloudinary from '../config/cloudinary'
import eliminarArchivo from "../helpers/eliminarArchivo"



export const oneProduct = async (req: Request, res: Response) => {
  if(req.method !== 'GET') return res.status(405).json({msg: 'Method not allowed'})
  const { _id } = req.params

  try {
    const product = await Product.findById(_id)
    if(!product){
      const error = new Error('Product not found')
      return res.status(404).json({msg: error.message})
    }

    res.json(product)
  } catch (error) {
    res.status(500)
    console.log('GET_ONE_PRODUCT_ERROR', error)
  }
}

export const allProducts = async (req: Request, res: Response) => {
  if(req.method !== 'GET') return res.status(405).json({msg: 'Method not allowed'})

  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500)
    console.log('GET_ALL_PRODUCT_ERROR', error)
  }
}

export const createProduct = async (req: Request, res: Response) => {
  if(req.method !== 'POST') return res.status(405).json({msg: 'Method not allowed'})

  const { tempFilePath, name } = req?.files?.pdf as fileUpload.UploadedFile

  try {
    const resultCloudinary = await cloudinary.uploader.upload(tempFilePath, {
      folder: 'Huacullani'
    })

    const product = await new Product({
      name: req.body.name, 
      code: req.body.code, 
      buyer: req.body.buyer, 
      price: req.body.price, 
      quantity: req.body.quantity, 
      saleDate: req.body.saleDate, 
      typeSale: req.body.typeSale, 
      pdf: {
        name,
        public_id: resultCloudinary?.public_id,
        url: resultCloudinary?.secure_url
      }
    })

    await eliminarArchivo(tempFilePath)
    await product.save()
    res.json(product)
  } catch (error) {
    res.status(500)
    console.log('CREATE_PRODUCT_ERROR', error)
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  if(req.method !== 'PUT') return res.status(405).json({msg: 'Method not allowed'})

  const { _id } = req.params
  const { tempFilePath, name } = req?.files?.pdf as fileUpload.UploadedFile

  const product = await Product.findById(_id)

  try {
    if (!req.files) {
      product.name = req.body.name || product.name
      product.code = req.body.code || product.code
      product.buyer = req.body.buyer || product.buyer
      product.price = req.body.price || product.price
      product.quantity = req.body.quantity || product.quantity
      product.saleDate = req.body.saleDate || product.saleDate
      product.typeSale = req.body.typeSale || product.typeSale
      await product.save()
      res.json(product)
    } else {
      await cloudinary.uploader.destroy(product.pdf.public_id)

      const resultCloudinary = await cloudinary.uploader.upload(tempFilePath, {
        folder: 'Huacullani'
      })

      product.name = req.body.name || product.name
      product.code = req.body.code || product.code
      product.buyer = req.body.buyer || product.buyer
      product.price = req.body.price || product.price
      product.quantity = req.body.quantity || product.quantity
      product.saleDate = req.body.saleDate || product.saleDate
      product.typeSale = req.body.typeSale || product.typeSale
      product.pdf.name = name || product.pdf.name
      product.pdf.public_id = resultCloudinary.public_id || product.pdf.public_id
      product.pdf.url = resultCloudinary.secure_url || product.pdf.url

      await product.save()
      await eliminarArchivo(tempFilePath)
      res.json(product)
    }
  } catch (error) {
    res.status(500)
    console.log('UPDATE_PRODUCT_ERROR', error)
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  const { _id } = req.params

  try {
    const product = await Product.findById(_id)
    if(!product){
      const error = new Error('Product not found')
      return res.status(404).json({msg: error.message})
    }

    await cloudinary.uploader.destroy(product.pdf.public_id)
    await product.deleteOne()
    res.json(product)
  } catch (error) {
    res.status(500)
    console.log('DELETE_PRODUCT_ERROR', error)
  }
}