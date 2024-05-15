import type { Product } from './Product'

export interface Article {
  title: string
  imgSrc: string
  button: string
  titleTwo?: string
  text?: string
  products?: Product[]
}
