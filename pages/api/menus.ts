import { Menu } from '@/types/common'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse<Menu>) {
  const response = await fetch("https://storage.googleapis.com/statistics-hyogo/contents/statistics-menus.json")
  const menus = await response.json()
  res.status(200).json(menus)
}