import { Request, Response } from "express"

export const oneWareHouse = async (_req: Request, res: Response) => {
  res.send('one WareHouse')
}

export const allWareHouse = async (_req: Request, res: Response) => {
  res.send('allWareHouse')
}

export const createWareHouse = async (_req: Request, res: Response) => {
  res.send('createWareHouse')
}

export const updateWareHouse = async (_req: Request, res: Response) => {
  res.send('update warehouse')
}

export const deleteWareHouse = async (_req: Request, res: Response) => {
  res.send('update warehouse')
}