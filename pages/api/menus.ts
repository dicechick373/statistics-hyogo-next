import { Menu } from '@/types/common'
import { NextApiRequest, NextApiResponse } from 'next/types'


export default async function handler(req: NextApiRequest, res: NextApiResponse<Menu[]>) {
  const response = await fetch("https://storage.googleapis.com/statistics-hyogo/contents/statistics-menus.json")
  const menus:Menu[] = await response.json()


  if (req.query.fieldId) {
    const fieldId = req.query.fieldId
    res.status(200).json(menus.filter((f) => f.fieldId === fieldId))
  } else {
    res.status(200).json(menus)
  }

}