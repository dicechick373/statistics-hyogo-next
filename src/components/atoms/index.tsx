import { atom } from 'jotai'

export const currentArea = atom('28100')

export const currentAreaCode = atom('28100')

/*
 ** 地域リスト _app.tsxでセット
 */
export const areasAtom = atom([])

/*
 ** 都道府県リスト
 */
export const prefListAtom = atom((get) => get(areasAtom).filter((f) => f.governmentType === 'prefecture'))

/*
 ** 都道府県リスト
 */
export const prefCodeAtom = atom(28)