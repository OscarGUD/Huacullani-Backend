export interface IProduct {
  name: string
  code: number
  buyer: string
  price: number
  quantity: number
  saleDate: string
  typeSale: string
  pdf: object
}

export interface IWareHouse {
  name: string
  code: number
  quantity: number
  pricePerUnit: number
  arrivalDate: string
  total: number
}