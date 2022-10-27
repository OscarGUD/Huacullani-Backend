import { Request, Response } from "express"

export const oneProduct = async (_req: Request, res: Response) => {
  res.send('one Product')
}

export const allProduct = async (_req: Request, res: Response) => {
  res.send('allProduct')
}

export const createProduct = async (_req: Request, res: Response) => {
  res.send('create Product')
}

export const updateProduct = async (_req: Request, res: Response) => {
  res.send('update Product')
}

export const deleteProduct = async (_req: Request, res: Response) => {
  res.send('update Product')
}