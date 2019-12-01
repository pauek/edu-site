
import { getCourses } from '../api'

const sendJson = (res, obj) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(obj))
}

export async function get(req, res, next) {
  sendJson(res, await getCourses())
}