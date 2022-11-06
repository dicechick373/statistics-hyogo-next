import { Area, Pref } from '@/types/common'
import { NextApiRequest, NextApiResponse } from 'next/types'


export default async function handler(req: NextApiRequest, res: NextApiResponse<Pref[] | Pref>) {
  const response = await fetch("https://storage.googleapis.com/statistics-hyogo/resas/arealist.json")
  const areas: Area[] = await response.json()

  const prefs: Pref[] = areas.filter((f) => f.governmentType === 'prefecture')

  if (req.query.prefCode) {
    const prefCode = parseInt(req.query.prefCode)
    res.status(200).json(prefs.find((f) => f.prefCode === prefCode))
  } else {
    res.status(200).json(prefs)
  }

}