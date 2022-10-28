import { Request, Response } from "express"
import WareHouse from "../models/wareHouse"
import { IWareHouse } from '../types/types'

export const oneWareHouse = async (req: Request, res: Response) => {
  if(req.method !== 'GET') return res.status(405).json({msg: 'Method not allowed'})
  const { _id } = req.params

  try {
    const wareHouse = await WareHouse.findById(_id)
    if(!wareHouse){
      const error = new Error('Warehouse not found')
      return res.status(404).json({msg: error.message})
    }

    res.json(wareHouse)
  } catch (error) {
    res.status(500)
    console.log('GET_ONE_WARE_HOUSE_ERROR', error)
  }
}

export const allWareHouse = async (req: Request, res: Response) => {
  if(req.method !== 'GET') return res.status(405).json({msg: 'Method not allowed'})

  try {
    const wareHouses = await WareHouse.find()
    res.json(wareHouses)
  } catch (error) {
    res.status(500)
    console.log('GET_ALL_WARE_HOUSE_ERROR', error)
  }
}

export const createWareHouse = async (req: Request, res: Response) => {
  if(req.method !== 'POST') return res.status(405).json({msg: 'Method not allowed'})

  const { name, code, quantity, pricePerUnit, arrivalDate, total } = req.body

  if([name, code, quantity, pricePerUnit, arrivalDate, total].includes('')){
    const error = new Error('All fields are required')
    return res.status(404).json({msg: error.message})
  }

  try {
    const wareHouse = await new WareHouse(<IWareHouse>req.body)
    await wareHouse.save()
    res.json(wareHouse)
  } catch (error) {
    res.status(500)
    console.log('CREATE_WARE_HOUSE_ERROR', error)
  }
}

export const updateWareHouse = async (req: Request, res: Response) => {
  if(req.method !== 'PUT') return res.status(405).json({msg: 'Method not allowed'})

  const { name, code, quantity, pricePerUnit, arrivalDate, total } = req.body
  const { _id } = req.params

  try {
    const wareHouse = await WareHouse.findById(_id)
    if(!wareHouse){
      const error = new Error('Warehouse not found')
      return res.status(404).json({msg: error.message})
    }

    wareHouse.name = name || wareHouse.name
    wareHouse.code = code || wareHouse.code
    wareHouse.quantity = quantity || wareHouse.quantity
    wareHouse.pricePerUnit = pricePerUnit || wareHouse.pricePerUnit
    wareHouse.arrivalDate = arrivalDate || wareHouse.arrivalDate
    wareHouse.total = total || wareHouse.total

    await wareHouse.save()
    res.json(wareHouse)
  } catch (error) {
    res.status(500)
    console.log('UPDATE_WARE_HOUSE_ERROR', error)
  }
}

export const deleteWareHouse = async (req: Request, res: Response) => {
  if(req.method !== 'DELETE') return res.status(405).json({msg: 'Method not allowed'})
  const { _id } = req.params

  try {
    const wareHouse = await WareHouse.findById(_id)
    await wareHouse.deleteOne()
    res.json(wareHouse)
  } catch (error) {
    res.status(500)
    console.log('DELETE_WARE_HOUSE_ERROR', error)
  }


}