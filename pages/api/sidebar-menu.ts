import { Field, Menu } from "@/types/common"

export default async function handler(req, res) {

  // fields
  const res_fields = await fetch("https://storage.googleapis.com/statistics-hyogo/contents/statistics-fields.json")
  const fields: Field[] = await res_fields.json()

  // menus
  const res_menus = await fetch("https://storage.googleapis.com/statistics-hyogo/contents/statistics-menus.json")
  const menus: Menu[] = await res_menus.json()

  const data = fields.map((d) => {
    return {
      id: d.fieldId,
      title: d.fieldTitle,
      type: 'collapse',
      children: menus.filter((f) => f.fieldId === d.fieldId).map((m) => {
        return {
          id: m.menuId,
          title: m.menuId,
          type: 'item',
          url: `/${d.fieldId}/${m.menuId}`,
          target: true,
        }
      })

    }

  })


  res.status(200).json(data)
}