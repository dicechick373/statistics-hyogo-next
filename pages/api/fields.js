export default async function handler(req, res) {
  const response = await fetch("https://storage.googleapis.com/statistics-hyogo/contents/statistics-fields.json")
  const fields = await response.json()
  res.status(200).json(fields)
}